from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import (
    UserProfile, Interest, UserInterest, User, AdvertiserProfile, Blog, Advertisement
)

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
    ordering = ('id',)  # Order by ID

# Register UserProfile, Interest, and UserInterest models
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
        """ Custom function to display username for UserInterest. """
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
    Admin interface for managing Advertisements.
    """
    list_display = (
        'id', 'advertiser', 'title', 'ad_image', 'link',
        'start_date', 'end_date', 'created_at', 'updated_at'
    )
    search_fields = ('id', 'title', 'advertiser__username', 'link')
    list_filter = ('start_date', 'end_date', 'advertiser')
    readonly_fields = ('created_at', 'updated_at')  # Prevent modification of timestamps
    ordering = ["-created_at"]  # Show latest ads first
    fieldsets = (
        ('Advertisement Details', {
            'fields': ('advertiser', 'title', 'ad_image', 'link')
        }),
        ('Schedule', {
            'fields': ('start_date', 'end_date')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at')
        }),
    )
