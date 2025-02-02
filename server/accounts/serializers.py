#serializers.py accounts
"""
This module contains serializers for the accounts app.

It defines serializers for the user profile and related models, enabling data
serialization and deserialization for API requests and responses. This includes
handling custom fields and business logic, such as linking user profiles with
authenticated users.
"""
from datetime import datetime
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth import authenticate
from django.db import transaction
from .models import (User,UserProfile,Interest,UserInterest,AdvertiserProfile,Blog,
                     Advertisement,validate_phone_number)

#Serializer for the User Model
class UserSerializer(serializers.ModelSerializer):
    """
        serializer for the django user model
    """
    class Meta:
        model = User
        fields = ['id','username','email','password','is_active','user_type']
        extra_kwargs = {
            'username': {'required': True},
            'email': {'required': True},
            'password': {'required': True,'write_only':True},
            'user_type':{'required':True},
        }
    def create(self, validated_data):
    # Ensures the password is hashed before saving
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            user_type=validated_data['user_type'],
        )
        return user
# Custom JWT Token Serializer
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
    Serializer for the token generation with custom validations.
    """
    def validate(self, attrs):
        # Fetch the user directly by username or email
        try:
            user = User.objects.get(username=attrs['username'])
        except User.DoesNotExist as exc:
            raise ValidationError({"error": "Invalid username or password."}) from exc

        # Check if the user is active
        if not user.is_active:
            raise ValidationError({"error": "This account is not active. Please contact the ADMIN."})

        # Authenticate the user
        user = authenticate(username=attrs['username'], password=attrs['password'])
        if user is None:
            raise ValidationError({"error": "Invalid username or password."})

        # Perform the default validation and add custom fields
        data = super().validate(attrs)
        data['username'] = user.username
        data['email'] = user.email
        return data

    def create(self, validated_data):
        raise NotImplementedError("Create method not implemented")

    def update(self, instance, validated_data):
        raise NotImplementedError("Update method not implemented")
    
class ResetPasswordSerializer(serializers.Serializer):
    """
    this is the serializer for the reset password it takes in the fields uid, token and the new 
    password
    """
    uid = serializers.CharField()
    token = serializers.CharField()
    new_password = serializers.CharField(min_length=8, write_only=True)

    def validate(self, attrs):
        try:
            uid = urlsafe_base64_decode(attrs['uid']).decode()
            user = User.objects.get(pk=uid)
        except (User.DoesNotExist, ValueError, TypeError) as exc:
            raise serializers.ValidationError("Invalid user") from exc

        if not default_token_generator.check_token(user, attrs['token']):
            raise serializers.ValidationError("Invalid or expired token")

        return attrs

    def save(self, **kwargs):
        uid = urlsafe_base64_decode(self.validated_data['uid']).decode()
        user = User.objects.get(pk=uid)
        user.set_password(self.validated_data['new_password'])
        user.save()
    def create(self, validated_data):
        raise NotImplementedError("Create method not implemented")

    def update(self, instance, validated_data):
        raise NotImplementedError("Update method not implemented")

class UserDetailsSerializer(serializers.ModelSerializer):
    """
    Serializer for user details, including first_name, last_name, and email.
    """
    class Meta:
        model = User
        fields = ['id','username', 'email', 'first_name', 'last_name','is_active','user_type']

class UserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for profile details of a user, including first_name, last_name, and nested user 
    details.
    """
    first_name = serializers.CharField(write_only=True)
    last_name = serializers.CharField(write_only=True)
    photo = serializers.ImageField(required=False)
    user = UserDetailsSerializer(read_only=True)  # Nested user serializer

    class Meta:
        model = UserProfile
        fields = [ 'user','phone_number', 'gender', 'photo', 'first_name', 'last_name',]

    def create(self, validated_data):
        """
        Overriding create to ensure first_name and last_name are updated in the User model
        """
        user = self.context['request'].user
        validated_data['user'] = user

        # Extract first_name and last_name from validated data
        first_name = validated_data.pop('first_name', None)
        last_name = validated_data.pop('last_name', None)

        # Update the user's first_name and last_name
        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        user.save()

        return super().create(validated_data)

    def update(self, instance, validated_data):
        """
        Overriding update to ensure first_name and last_name are updated in the User model.
        """
        user = instance.user

        # Update first_name and last_name if provided
        first_name = validated_data.pop('first_name', None)
        last_name = validated_data.pop('last_name', None)

        if first_name:
            user.first_name = first_name
        if last_name:
            user.last_name = last_name
        user.save()

        return super().update(instance, validated_data)
class InterestSerializer(serializers.ModelSerializer):
    """
    Serializer for the Interest model.
    """
    class Meta:
        model = Interest
        fields = ['id', 'name', 'icon']


class AddUserInterestsSerializer(serializers.Serializer):
    """
    Serializer for adding multiple interests to a user.
    """
    interest_ids = serializers.ListField(
        child=serializers.IntegerField(),
        write_only=True,
        help_text="List of interest IDs to add to the user."
    )

    def validate_interest_ids(self, value):
        """
        Validate that the interest IDs exist in the database.
        """
        valid_interests = Interest.objects.filter(id__in=value)
        if len(valid_interests) != len(value):
            raise serializers.ValidationError("One or more interest IDs are invalid.")
        return value

    def save(self, **kwargs):
        """
        Save the interests to the user's profile.
        """
        user_profile = self.context['user_profile']
        interest_ids = self.validated_data['interest_ids']

        # Add interests to the user's profile
        for interest_id in interest_ids:
            interest = Interest.objects.get(id=interest_id)
            UserInterest.objects.get_or_create(user_profile=user_profile, interest=interest)


class AdvertiserProfileSerializer(serializers.ModelSerializer):
    """
    Serializer for the AdvertiserProfile model.
    """
    business_type = InterestSerializer(read_only=True)
    business_type_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = AdvertiserProfile
        fields = ['id', 'user', 'business_name', 'business_type', 'business_type_id',
                  'contact_number', 'address', 'profile_image']
        read_only_fields = ['user']

    def validate_business_type_id(self, value):
        """
        Custom validation to ensure the business type ID is valid.
        """
        if not Interest.objects.filter(id=value).exists():
            raise serializers.ValidationError("Invalid business type ID.")
        return value

    def create(self, validated_data):
        """
        Overriding create to link the AdvertiserProfile with the authenticated user.
        """
        user = self.context['request'].user
        validated_data['user'] = user
        return super().create(validated_data)

    def update(self, instance, validated_data):
        """
        Custom update to allow partial updates for AdvertiserProfile.
        """
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance

class UserAdvertiserProfileSerializer(serializers.Serializer):
    """
    Combined serializer to create a User and their associated AdvertiserProfile.
    """
    # User-related fields
    username = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    user_type = serializers.ChoiceField(choices=User.USER_TYPE_CHOICES)

    # AdvertiserProfile-related fields
    business_name = serializers.CharField(max_length=255)
    business_type_id = serializers.IntegerField(write_only=True)
    contact_number = serializers.CharField(max_length=10, validators=[validate_phone_number])
    address = serializers.CharField()
    profile_image = serializers.ImageField(required=False)

    @transaction.atomic
    def create(self, validated_data):
        """
        Creates both the User and the AdvertiserProfile.
        """
        # Extract user-related data
        user_data = {
            'username': validated_data.pop('username'),
            'email': validated_data.pop('email'),
            'password': validated_data.pop('password'),
            'user_type': validated_data.pop('user_type'),
        }

        # Create the User
        user_serializer = UserSerializer(data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()

        # Explicitly set is_active to False
        user.is_active = False
        user.save()

        # Create the AdvertiserProfile
        advertiser_profile_data = validated_data
        advertiser_profile_data['user'] = user
        advertiser_profile_data['business_type_id'] = validated_data.pop('business_type_id')
        advertiser_profile = AdvertiserProfile.objects.create(**advertiser_profile_data)

        return {
            'user': user_serializer.data,
            'advertiser_profile': AdvertiserProfileSerializer(advertiser_profile).data
        }

    @transaction.atomic
    def update(self, instance, validated_data):
        """
        Custom update to allow partial updates for AdvertiserProfile.
        """
        raise NotImplementedError("Update method not implemented")

#Serializer for the Blog Model
class BlogSerializer(serializers.ModelSerializer):
    """
    Serializer for the Blog model
    """
    interests = InterestSerializer(read_only=True)  # Nested Interest serializer
    interest_id = serializers.PrimaryKeyRelatedField(queryset=Interest.objects.all(),
                                                      write_only=True, source='interests')

    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'image', 'interests', 'interest_id','created_at', 'updated_at']
        read_only_fields = ['author', 'created_at', 'updated_at']

    def validate(self, attrs):
        """
        Prevent modifiying the interests during update
        """
        if self.instance and 'interest' in attrs:
            raise serializers.ValidationError({"interest":
                                               "Interest cannot be modified after creation."})
        return attrs

    def create(self, validated_data):
        # Automatically set the author to the logged-in user
        validated_data['author'] = self.context['request'].user
        return super().create(validated_data)

    def update(self,instance,validated_data):
        """
        Handle updates, ensuring `interests` is not modified
        """
        validated_data.pop('interests', None)
        return super().update(instance, validated_data)

class AdvertisementSerializer(serializers.ModelSerializer):
    """
    Serializer for the Advertisement model.
    """
    class Meta:
        model = Advertisement
        fields = ['id', 'ad_image', 'title', 'link', 'start_date', 'end_date', 'created_at', 'updated_at']

    def to_internal_value(self, data):
        # Parse start_date and end_date from DD-MM-YYYY to YYYY-MM-DD
        for date_field in ['start_date', 'end_date']:
            if date_field in data and data[date_field]:
                try:
                    data[date_field] = datetime.strptime(data[date_field], "%d-%m-%Y").date()
                except ValueError as exc:
                    raise serializers.ValidationError({date_field: "Date must be in DD-MM-YYYY format."}) from exc
        return super().to_internal_value(data)
    def create(self, validated_data):
        # Get the advertiser from the context
        advertiser = self.context['request'].user

        # Create the Advertisement instance with the advertiser
        advertisement = Advertisement.objects.create(advertiser=advertiser, **validated_data)
        return advertisement    