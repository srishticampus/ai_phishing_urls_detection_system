# models.py accounts

import re
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.db import models


class User(AbstractUser):
    """
    Custom user model inheriting from AbstractUser.
    """

def validate_phone_number(value):
    """
    function to validate phone number has 10 digits only
    """
    if not re.match(r'^\d{10}$', value):
        raise ValidationError("Phone number must be in a valid format (e.g., '1234567890').")

class Profile(models.Model):
    """
    model class to extend profile details to the User class    
    """
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,
                                related_name="profile")
    phone_number = models.CharField(max_length=10, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True)
    photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"

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
    model class to add all the interests each user like  
    """
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="user_interests")
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE, related_name="interested_users"
    )
    added_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('profile', 'interest')

    def __str__(self):
        return f"{self.profile.user.username}'s interest in {self.interest.name}"
