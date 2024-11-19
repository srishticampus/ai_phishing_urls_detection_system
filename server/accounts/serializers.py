#serializers.py accounts
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.utils.http import urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from .models import User
#Serializer for the User Model
class UserSerializer(serializers.ModelSerializer):
    """
        serializer for the django user model
    """
    class Meta:
        model = User
        fields = ['username','email','password']
        extra_kwargs = {
            'username': {'required': True},
            'email': {'required': True},
            'password': {'required': True,'write_only':True},
        }
    def create(self, validated_data):
    # Ensures the password is hashed before saving
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
# Custom JWT Token Serializer
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """
        serializer for the token generation
    """
    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['email'] = self.user.email
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