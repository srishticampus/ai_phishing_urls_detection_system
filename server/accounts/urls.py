from django.urls import path,include
from rest_framework import routers
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


app_name = 'accounts'

urlpatterns = [
    path('register/', views.UserRegistrationView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
