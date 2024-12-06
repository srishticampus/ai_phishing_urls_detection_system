"""
Urls configuration page for the app accounts
"""
#urls.py accounts
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import (UserRegistrationView,LoginView,ForgotPasswordView,ResetPasswordView,
                    ProfileCreateView,ProfileRetrieveView,ProfileUpdateView)

app_name = 'accounts'

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path('profile/add/', ProfileCreateView.as_view(), name='add-profile'),
    path('profile/view/', ProfileRetrieveView.as_view(), name='profile-view'),
    path('profile/edit/', ProfileUpdateView.as_view(), name='profile-edit'),
]
