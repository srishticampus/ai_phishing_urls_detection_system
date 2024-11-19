#views.py accounts
"""
This module contains views and endpoints for the AI Phishing URL Detection System.

It defines the API views for token authentication, permissions, and other
related features, using Django REST Framework and Simple JWT for token handling.
"""
import os
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from rest_framework import permissions,generics,status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.models import User
from .serializers import UserSerializer,CustomTokenObtainPairSerializer,ResetPasswordSerializer


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
            return Response(
                {"message": "Login successful!", "token": serializer.validated_data},
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
