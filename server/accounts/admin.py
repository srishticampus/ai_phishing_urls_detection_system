#admin.py accounts
"""
This module contains admin configurations for the accounts app.

It customizes the Django admin interface for managing users, profiles, interests,
and user interests. These configurations include list displays, search capabilities,
and filtering options to enhance admin usability.
"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Profile, Interest, UserInterest, User

# Register the custom User model
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    """
    Admin interface for managing custom User model.
    """
    model = User
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_active', 'is_staff')
    search_fields = ('username', 'email', 'first_name', 'last_name')
    list_filter = ('is_active', 'is_staff', 'groups')

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {'classes': ('wide',), 'fields': ('username', 'email', 'password')}),
    )

    # Customize the ordering of users in the admin panel
    ordering = ('username',)

# Register the Profile, Interest, and UserInterest models
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    """
    Admin interface for managing profiles.
    """
    list_display = ('user', 'phone_number', 'gender')
    search_fields = ('user__username', 'phone_number')
    list_filter = ('gender',)

@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    """
    Admin interface for managing interests.
    """
    list_display = ('name', 'icon')
    search_fields = ('name',)

@admin.register(UserInterest)
class UserInterestAdmin(admin.ModelAdmin):
    """
    Admin interface for managing user interests.
    """
    list_display = ('profile', 'interest', 'added_on')
    readonly_fields = ('added_on',)
    list_filter = ('added_on',)
    search_fields = ('profile__user__username', 'interest__name')

    def profile_user(self, obj):
        """
        Custom function to display username for UserInterest.
        """
        return obj.profile.user.username
    profile_user.short_description = 'Username'
