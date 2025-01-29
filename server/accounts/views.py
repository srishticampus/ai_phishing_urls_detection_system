#views.py accounts
"""
This module contains views and endpoints for the AI Phishing URL Detection System.

It defines the API views for token authentication, permissions, and other
related features, using Django REST Framework and Simple JWT for token handling.
"""
import os
import logging
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.db import DatabaseError,transaction
from rest_framework import permissions,generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import APIException
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.models import User,UserProfile,Interest,Blog,AdvertiserProfile,Advertisement
from .serializers import (UserSerializer,CustomTokenObtainPairSerializer,ResetPasswordSerializer,
                          UserProfileSerializer,InterestSerializer,BlogSerializer,
                          UserAdvertiserProfileSerializer,AdvertiserProfileSerializer,AdvertisementSerializer)
from .permissions import IsAdminorReadOnly,IsAdmin

logger = logging.getLogger(__name__)

#User Registration View
class UserRegistrationView(generics.CreateAPIView):
    """
    This class contains the view for registering a user 
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully!", "user": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        return Response(
            {"errors": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )

# User Login View
class LoginView(TokenObtainPairView):
    """
    This class contains the view for logging in a user and jwt token generation
    """
    serializer_class = CustomTokenObtainPairSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.user
            # Return the appropriate response
            return Response(
                {
                    "message": "Login successful!",
                    "token": serializer.validated_data,
                    "user_type": user.user_type,
                },
                status=status.HTTP_200_OK,
            )
        return Response(
            {"errors": serializer.errors},
            status=status.HTTP_401_UNAUTHORIZED
        )

#Forgot Password View
class ForgotPasswordView(APIView):
    """
    This class contains the view for forgot password handling 
    """
    permission_classes = [permissions.AllowAny]
    def post(self,request):
        """
            This function is for handling the post request for getting the email for which 
            the password has been forgot
        """
        email = request.data.get('email')
        if not email:
            return Response(
                            {"error":"Email is required"},
                            status=status.HTTP_400_BAD_REQUEST
            )
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response(
                {"error":"No user found with this email"},
                status=status.HTTP_404_NOT_FOUND
            )
        #Generate token and UID
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))

        #Construct Password reset link
        frontend_url = os.getenv('FRONTEND_URL','http://localhost:3000')
        reset_link = f"{frontend_url}/reset-password/{uid}/{token}/"

        #Send email
        send_mail(
            subject= "Password Reset Request - Blog Sphere",
            message= f"Click the Link to reset the password:\n\n{reset_link}",
            from_email= os.getenv('EMAIL_HOST_USER'),
            recipient_list= [email]
            )
        return Response(
            {"message": "Password reset link sent to your email"},
            status=status.HTTP_200_OK)

#Reset Password View
class ResetPasswordView(APIView):
    """
    this is the view for the reset password 
    """
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        """
        handles the post request for reset password view
        """
        serializer = ResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Password reset successful"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileCreateView(APIView):
    """
    View for creating a profile for a user, including updating first_name and last_name.
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        """
        Handles the POST request for profile creation.
        """
        # Check if the user already has a profile
        if UserProfile.objects.filter(user=request.user).exists():
            return Response(
                {"error": "Profile already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Convert request data to a mutable dictionary
        data = request.data.copy()  # Ensures mutability

        # Add the photo field if it exists in request.FILES
        if 'photo' in request.FILES:
            data['photo'] = request.FILES['photo']

        # Pass data to serializer
        serializer = UserProfileSerializer(data=data, context={'request': request})
        if serializer.is_valid():
            serializer.save(user=request.user)  # Ensure the user is associated with the profile
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserProfileRetrieveView(APIView):
    """
    View for retrieving the profile of the logged-in user.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        """
        Handles GET request to fetch the profile of the authenticated user.
        """
        try:
            profile = UserProfile.objects.get(user=request.user)
            serializer = UserProfileSerializer(profile, context={'request': request})
            return Response(serializer.data, status=status.HTTP_200_OK)
        except UserProfile.DoesNotExist:
            return Response(
                {"error": "Profile does not exist."},
                status=status.HTTP_404_NOT_FOUND
            )

class UserProfileUpdateView(APIView):
    """
    View for updating the profile of the logged-in user.
    """
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request):
        """
        Handles PUT request to update the profile of the authenticated user.
        """
        try:
            profile = UserProfile.objects.get(user=request.user)

            # Convert request data to a mutable dictionary
            data = request.data.copy()

            # Add the photo field if it exists in request.FILES
            if 'photo' in request.FILES:
                data['photo'] = request.FILES['photo']

            serializer = UserProfileSerializer(profile, data=data, context={'request': request},
                                           partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except UserProfile.DoesNotExist:
            return Response(
                {"error": "Profile does not exist."},
                status=status.HTTP_404_NOT_FOUND
            )

class InterestListView(APIView):
    """
    API view to get all interests.
    """
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        '''
        get method to view all interests
        '''
        interests = Interest.objects.all()
        serializer = InterestSerializer(interests, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BlogListCreateView(APIView):
    """
    API view to get all blogs, get a detailed view of a single blog, 
    create a new blog, update a blog, and delete a blog.
    """
    permission_classes = [IsAdminorReadOnly]

    def get(self, request, blog_id=None):
        """
        GET method to view all blogs or a single blog if 'id' is provided.
        """
        if blog_id:
            try:
                blog = Blog.objects.get(id=blog_id)
                serializer = BlogSerializer(blog)
                return Response(serializer.data,status=status.HTTP_200_OK)
            except Blog.DoesNotExist:
                return Response({"error":"Blog does not exist"},status=status.HTTP_404_NOT_FOUND)   
        else:
            blogs = Blog.objects.all()
            serializer = BlogSerializer(blogs,many=True)
            if(not serializer.data):
                return Response({"message":"No blogs "},status=status.HTTP_204_NO_CONTENT)
            return Response(serializer.data,status=status.HTTP_200_OK)
 
    def post(self,request):
        """ 
        post method to create a new blog
        """
        data = request.data.copy()
        if 'image' in request.FILES:
            data['image'] = request.FILES['image']

        serializer = BlogSerializer(data=data,context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,blog_id=None):
        """
        put method to update a blog
        """
        if blog_id or request.query_params.get('id'):
            try:
                if not blog_id:
                    blog_id = request.query_params.get('id')
                blog = Blog.objects.get(id=blog_id)
                data = request.data.copy()
                if 'image' in request.FILES:
                    data['image'] = request.FILES['image']
                if 'interest_id' in data:
                    data.pop('interest_id')
                serializer = BlogSerializer(blog,data=data,context={'request':request},partial=True)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data,status=status.HTTP_200_OK)
                return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            except blog.DoesNotExist:
                return Response({"error": "Blog does not exist."},status=status.HTTP_404_NOT_FOUND)
        return Response({"error":"Please provide an id,for it is required for updating blog"},
                        status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, blog_id=None):
        """
        delete method to delete a blog
        """
        if blog_id or request.query_params.get('id'):
            try:
                blog_id = request.query_params.get('id')
                blog = Blog.objects.get(id=blog_id)
                blog.delete()
                return Response({"message": "Blog deleted successfully"}, status=status.HTTP_200_OK)
            except Blog.DoesNotExist:
                return Response({"error": "Blog does not exist"}, status=status.HTTP_404_NOT_FOUND)
        return Response({"error": "Please provide an id, for it is required for deleting blog"},
                        status=status.HTTP_400_BAD_REQUEST)

class AdminUserListView(APIView):
    """
    API view to get details of all users, including their profiles.
    """
    permission_classes = [IsAdmin]

    def get(self, request):
        """
        GET method to fetch details of all users, including their profiles.
        """
        try:
            # Fetch all UserProfile objects
            user_profiles = UserProfile.objects.all()
            profile_serializer = UserProfileSerializer(user_profiles, many=True)

            # If UserProfile data is empty, fetch all User objects
            if not profile_serializer.data:
                users = User.objects.filter(user_type='user')
                user_serializer = UserSerializer(users, many=True)
                if not user_serializer.data:
                    return Response({"message": "No users found"}, 
                                    status=status.HTTP_204_NO_CONTENT)
                return Response(user_serializer.data, status=status.HTTP_200_OK)

            # Combine UserProfile data with User data for users without profiles
            all_users = User.objects.filter(user_type='user')
            users_with_profiles = {profile['user']['username'] 
                                   for profile in profile_serializer.data}
            users_without_profiles = [
                user for user in all_users if user.username not in users_with_profiles
            ]

            # Serialize users without profiles
            users_without_profiles_serializer = UserSerializer(users_without_profiles, many=True)

            # Combine both datasets
            combined_data = profile_serializer.data + users_without_profiles_serializer.data

            return Response(combined_data, status=status.HTTP_200_OK)

        except DatabaseError as db_err:
            # Handle database-related errors
            return Response(
                {"error": "Database error occurred.", "details": str(db_err)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        except APIException as api_err:
            # Handle API-related errors
            return Response(
                {"error": "API error occurred.", "details": str(api_err)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        except ValueError as val_err:
            # Handle value-related errors
            return Response(
                {"error": "Invalid data encountered.", "details": str(val_err)},
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            # Catch-all for any other unexpected errors
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class AdminToggleUserActivationView(APIView):
    """
    API view to activate or deactivate a user.
    """
    permission_classes = [IsAdmin]

    @transaction.atomic
    def patch(self, request,user_id):
        """
        PATCH method to toggle a user's active status.
        """
        try:
            # Fetch the user by id
            user = User.objects.get(id=user_id)
            # Toggle the is_active field
            user.is_active = not user.is_active
            user.save()

            # Prepare the response message
            status_message = "activated" if user.is_active else "deactivated"
            logger.info("Admin %s toggled activation for user %s.",
                            request.user.username, user.username)
            return Response(
                {"message": f"User '{user.username}' has been {status_message}."},
                status=status.HTTP_200_OK
            )

        except User.DoesNotExist:
            return Response(
                {"error": "Invalid user ID."},
                status=status.HTTP_404_NOT_FOUND
            )
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class RegisterAdvertiserView(APIView):
    """
    API view to handle registration of a User and their AdvertiserProfile.
    """
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        """
        POST method to register a new advertiser.
        """
        try:
            data = request.data.copy()
            if 'profile_image' in request.FILES:
                data['profile_image'] = request.FILES['profile_image']
            serializer = UserAdvertiserProfileSerializer(data=data)
            if serializer.is_valid():
                data = serializer.save()
                return Response(
                    {"message": "Advertiser registered successfully.", "data": data},
                    status=status.HTTP_201_CREATED
                    )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class AdminAdvertiserListView(APIView):
    """
    API view to get details of all advertisers, including their profiles.
    """
    permission_classes = [IsAdmin]

    def get(self, request):
        """
        GET method to fetch details of all advertisers.
        """
        try:
            # Fetch AdvertiserProfiles
            advertiser_profiles = AdvertiserProfile.objects.select_related('user').all()
            profile_serializer = AdvertiserProfileSerializer(advertiser_profiles, many=True)

            # Advertisers with profiles
            advertisers_with_profiles = set()
            for profile in profile_serializer.data:
                user_data = profile.get('user', {})
                if isinstance(user_data, dict):
                    advertisers_with_profiles.add(user_data.get('username'))

            # Fetch all advertisers
            all_advertisers = User.objects.filter(user_type='advertiser')

            # Advertisers without profiles
            advertisers_without_profiles = [
                advertiser for advertiser in all_advertisers
                if advertiser.username not in advertisers_with_profiles
            ]
            advertisers_without_profiles_serializer = UserSerializer(advertisers_without_profiles, many=True)

            # Combine data
            combined_data = profile_serializer.data + advertisers_without_profiles_serializer.data

            return Response(combined_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class AdminNewAdvertiserListView(APIView):
    """
    API view to get details of all new advertisers (is_active=False).
    """
    permission_classes = [IsAdmin]

    def get(self, request):
        """
        GET method to fetch details of all new advertisers.
        """
        try:
            # Fetch all inactive AdvertiserProfile objects
            new_advertiser_profiles = AdvertiserProfile.objects.select_related('user').filter(user__is_active=False)

            # Prepare combined data
            combined_data = []
            for profile in new_advertiser_profiles:
                # Serialize the profile
                profile_data = AdvertiserProfileSerializer(profile).data

                # Serialize the user associated with the profile
                user_data = {
                    "id": profile.user.id,
                    "username": profile.user.username,
                    "email": profile.user.email,
                    "is_active": profile.user.is_active,
                    "user_type": profile.user.user_type,
                }

                # Append both to the combined data
                combined_data.append(profile_data)
                combined_data.append(user_data)

            # If no inactive profiles found, return a message
            if not combined_data:
                return Response({"message": "No new advertisers found"}, status=status.HTTP_204_NO_CONTENT)

            return Response(combined_data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
  
class AdminAdvertisementsView(APIView):
    """
    API view for the admin to view all advertisements in the system.
    """
    permission_classes = [permissions.IsAuthenticated, permissions.IsAdminUser]

    def get(self, request):
        """
        GET method to retrieve all advertisements in the system.
        """
        try:
            # Fetch all advertisements
            advertisements = Advertisement.objects.all()
            serializer = AdvertisementSerializer(advertisements, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

class AdvertisementDetailView(APIView):
    """
    API view to retrieve, update, or delete a single advertisement by its ID.
    """
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, advertisement_id, user):
        """
        Helper method to get the advertisement object for the logged-in advertiser.
        """
        try:
            return Advertisement.objects.get(id=advertisement_id, advertiser=user)
        except Advertisement.DoesNotExist:
            return None

    def get(self, request, advertisement_id=None):
        """
        GET method to view all advertisements or a single advertisement if 'advertisement_id' is provided.
        """
        try:
            if advertisement_id:
                # Fetch the specific advertisement
                advertisement = self.get_object(advertisement_id, request.user)
                if advertisement:
                    serializer = AdvertisementSerializer(advertisement)
                    return Response(serializer.data, status=status.HTTP_200_OK)
                else:
                    return Response(
                        {"error": "Advertisement not found or you do not have permission to access it."},
                        status=status.HTTP_404_NOT_FOUND,
                    )
            else:
                # Fetch all advertisements by the advertiser
                advertisements = Advertisement.objects.filter(advertiser=request.user)
                serializer = AdvertisementSerializer(advertisements, many=True)
                if not serializer.data:
                    return Response({"message": "No advertisements found."}, status=status.HTTP_204_NO_CONTENT)
                return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def post(self, request):
        """
        POST method to create a new advertisement for the logged-in advertiser.
        """
        try:
            # Ensure the logged-in user is an advertiser
            if request.user.user_type != 'advertiser':
                return Response(
                    {"error": "Only advertisers can add advertisements."},
                    status=status.HTTP_403_FORBIDDEN,
                )

            # Create a mutable copy of the request data
            data = request.data.copy()

            # Add the logged-in user as the advertiser
            data['advertiser'] = request.user.id

            # Serialize and validate the data
            serializer = AdvertisementSerializer(data=data, context={'request': request})
            if serializer.is_valid():
                serializer.save()  # This will call the `create` method in the serializer
                return Response(serializer.data, status=status.HTTP_201_CREATED)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def put(self, request, advertisement_id):
        """
        PUT method to update a single advertisement.
        """
        try:
            advertisement = self.get_object(advertisement_id, request.user)
            if advertisement is None:
                return Response(
                    {"error": "Advertisement not found or you do not have permission to update it."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            serializer = AdvertisementSerializer(advertisement, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

    def delete(self, request, advertisement_id):
        """
        DELETE method to remove a single advertisement.
        """
        try:
            advertisement = self.get_object(advertisement_id, request.user)
            if advertisement is None:
                return Response(
                    {"error": "Advertisement not found or you do not have permission to delete it."},
                    status=status.HTTP_404_NOT_FOUND,
                )

            advertisement.delete()
            return Response({"message": "Advertisement deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
