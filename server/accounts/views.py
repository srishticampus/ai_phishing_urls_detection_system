#views.py accounts
from django.shortcuts import render
from accounts.serializers import UserSerializer,CustomTokenObtainPairSerializer
from django.contrib.auth.models import User,Group
from rest_framework import permissions, viewsets,generics
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response


#User Registration View
class UserRegistrationView(generics.CreateAPIView):
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