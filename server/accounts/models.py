# models.py accounts
"""
This module contains database models for the accounts app.

It defines the User model extension, Profile model, Interest model, and UserInterest
model. These models handle user data, profiles, interests, and the relationships
between users and their interests, forming the foundation for user management in
the system.
"""

import re
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.db import models


class User(AbstractUser):
    """
    Custom user model inheriting from AbstractUser.
    """
    USER_TYPE_CHOICES = (
        ('user', 'Normal User'),
        ('advertiser', 'Advertiser'),
        ('admin', 'Admin'),
    )
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='user')
    email = models.EmailField(unique=True)
    def __str__(self):
        return f"{self.username} ({self.get_user_type_display()})"

def validate_phone_number(value):
    """
    function to validate phone number has 10 digits only
    """
    if not re.match(r'^\d{10}$', value):
        raise ValidationError("Phone number must be in a valid format (e.g., '1234567890').")

class UserProfile(models.Model):
    """
    Model class to extend profile details to the User class.
    """
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                related_name="user_profile")
    phone_number = models.CharField(max_length=10, blank=True, validators=[validate_phone_number])
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True)
    photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s UserProfile"

class Interest(models.Model):
    """
    model class to add different interests   
    """
    name = models.CharField(max_length=100, unique=True)
    icon = models.ImageField(upload_to='interest_icons/')

    def __str__(self):
        return str(self.name)

class UserInterest(models.Model):
    """
    Model class to add all the interests each user likes.
    """
    user_profile = models.ForeignKey(UserProfile,
                                     on_delete=models.CASCADE, related_name="user_interests")
    interest = models.ForeignKey(Interest,
                                  on_delete=models.CASCADE, related_name="interested_users")
    added_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user_profile', 'interest')

    def __str__(self):
        return f"{self.user_profile.user.username}'s interest in {self.interest.name}"

class AdvertiserProfile(models.Model):
    """
    Model class to extend profile details for advertisers.
    """
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE, related_name="advertiser_profile")
    business_name = models.CharField(max_length=255)
    business_type = models.ForeignKey(Interest,
                                      on_delete=models.PROTECT, related_name="advertiser_profiles")
    contact_number = models.CharField(max_length=10, validators=[validate_phone_number])
    address = models.TextField()
    profile_image = models.ImageField(upload_to='advertiser_profile_photos/', blank=True, null=True)

    def __str__(self):
        return f"{self.business_name} ({self.user.username})"

class Blog(models.Model):
    """
    Model class to represent a blog post.
    """
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="blogs"
    )
    title = models.CharField(max_length=255)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    interests = models.ForeignKey(
        'Interest',
        on_delete=models.CASCADE,
        related_name="blogs",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.title)

class Advertisement(models.Model):
    """
    Model class to represent an advertisement.
    """
    advertiser = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="advertisements"
    )
    ad_image = models.ImageField(
        upload_to="advertisements/",
        verbose_name=("Advertisement Image"),
        help_text=("Upload the image for the advertisement.")
    )
    title = models.CharField(
        max_length=255,
        verbose_name=("Title"),
        help_text=("Enter the title of the advertisement.")
    )
    link = models.URLField(
        max_length=500,
        verbose_name=("Link or URL"),
        help_text=("Enter the URL or link associated with the advertisement.")
    )
    start_date = models.DateField(
        verbose_name=("Start Date"),
        help_text=("Select the start date for the advertisement.")
    )
    end_date = models.DateField(
        verbose_name=("End Date"),
        help_text=("Select the end date for the advertisement.")
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=("Created At")
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name=("Updated At")
    )

    def __str__(self):
        return f"{self.title} by {self.advertiser.username}"

    class Meta:
        verbose_name = ("Advertisement")
        verbose_name_plural = ("Advertisements")
        ordering = ["-created_at"]