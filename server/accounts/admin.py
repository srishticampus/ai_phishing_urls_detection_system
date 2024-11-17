# Register your models here.
# admin.py 
from django.contrib import admin
from .models import Profile, Interest, UserInterest

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    # Display fields in list view
    list_display = ('user', 'phone_number', 'gender')
    # Add search and filtering options for better manageability
    search_fields = ('user__username', 'phone_number')
    list_filter = ('gender',)

@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    # Display fields in list view
    list_display = ('name', 'icon')
    # Add search for finding interests quickly
    search_fields = ('name',)

@admin.register(UserInterest)
class UserInterestAdmin(admin.ModelAdmin):
    # Display fields in list view
    list_display = ('profile', 'interest', 'added_on')
    # Make fields read-only to avoid accidental modifications
    readonly_fields = ('added_on',)
    # Enable filtering and search for easier navigation
    list_filter = ('added_on',)
    search_fields = ('profile__user__username', 'interest__name')

    # Optional: Custom function to display username in UserInterest list
    def profile_user(self, obj):
        return obj.profile.user.username
    profile_user.short_description = 'Username'
