"""
Urls configuration page for the app accounts
"""
#urls.py accounts
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import (UserRegistrationView,LoginView,ForgotPasswordView,ResetPasswordView,
                    UserProfileCreateView,UserProfileRetrieveView,UserProfileUpdateView,
                    InterestListView,BlogListCreateView,AdminUserListView,AdminToggleUserActivationView,
                    RegisterAdvertiserView)

app_name = 'accounts'

urlpatterns = [
    # User-related URLs
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('forgot-password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path('user-profile/add/', UserProfileCreateView.as_view(), name='add-profile'),
    path('user-profile/view/', UserProfileRetrieveView.as_view(), name='profile-view'),
    path('user-profile/edit/', UserProfileUpdateView.as_view(), name='profile-edit'),
    path('interests/', InterestListView.as_view(), name='interest-list'),

    # Blog related URLs
    path('blogs/', BlogListCreateView.as_view(), name='blog-list-create'),
    path('blogs/<int:blog_id>/', BlogListCreateView.as_view(), name='blog-detail'),

    # Admin related URLs
    path('admin-view-users/',AdminUserListView.as_view(),name='admin-view-users'),
    path('toggle-user-activation/<int:user_id>/', AdminToggleUserActivationView.as_view(), 
         name='toggle-user-activation'),
    path('register-advertiser/', RegisterAdvertiserView.as_view(), name='register-advertiser'),
]
