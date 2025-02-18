"""
This module contains admin configurations for the accounts app.

It customizes the Django admin interface for managing users, user profiles, interests,
and user interests. These configurations include list displays, search capabilities,
and filtering options to enhance admin usability.
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserProfile, Interest, UserInterest, User, AdvertiserProfile, Blog, Advertisement

# Register the custom User model
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    """
    Admin interface for managing the custom User model.
    """
    model = User
    list_display = ('id', 'username', 'email', 'first_name', 'last_name', 
                    'user_type', 'is_active', 'is_staff')
    search_fields = ('id', 'username', 'email', 'first_name', 'last_name')
    list_filter = ('is_active', 'is_staff', 'user_type', 'groups')

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email', 'user_type')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 
                                    'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {'classes': ('wide',), 'fields': ('username', 'email', 'password')}),
    )

    ordering = ('id',)  # Order by ID

# Register the UserProfile, Interest, and UserInterest models
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    """
    Admin interface for managing user profiles.
    """
    list_display = ('id', 'user', 'phone_number', 'gender')
    search_fields = ('id', 'user__username', 'user__email', 'phone_number')
    list_filter = ('gender',)

@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    """
    Admin interface for managing interests.
    """
    list_display = ('id', 'name', 'icon')
    search_fields = ('id', 'name')

@admin.register(UserInterest)
class UserInterestAdmin(admin.ModelAdmin):
    """
    Admin interface for managing user interests.
    """
    list_display = ('id', 'user_profile_display', 'interest', 'added_on')
    readonly_fields = ('added_on',)
    list_filter = ('added_on',)
    search_fields = ('id', 'user_profile__user__username', 'interest__name')

    def user_profile_display(self, obj):
        """
        Custom function to display username for UserInterest.
        """
        return obj.user_profile.user.username
    user_profile_display.short_description = 'Username'

@admin.register(AdvertiserProfile)
class AdvertiserProfileAdmin(admin.ModelAdmin):
    """
    Admin interface for managing advertiser profiles.
    """
    list_display = ('id', 'user', 'business_name', 'business_type', 'contact_number')
    search_fields = ('id', 'user__username', 'business_name', 'contact_number', 'business_type__name')
    list_filter = ('business_type',)

    def user_email(self, obj):
        """
        Custom function to display email for AdvertiserProfile.
        """
        return obj.user.email
    user_email.short_description = 'Email'

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    """
    Admin interface for viewing blogs.
    """
    list_display = ('id', 'title', 'author', 'created_at')
    list_filter = ('created_at', 'interests')
    search_fields = ('id', 'title', 'content')

@admin.register(Advertisement)
class AdvertisementAdmin(admin.ModelAdmin):
    """
    Admin interface for viewing Advertisements.
    """
    list_display = ('id', 'title', 'advertiser', 'start_date', 'end_date', 'created_at')
    search_fields = ('id', 'title', 'advertiser__username')
    list_filter = ('start_date', 'end_date')
