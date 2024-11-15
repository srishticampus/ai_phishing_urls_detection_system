# models.py accounts

import re
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from django.db import models
from django.contrib.auth.models import User

def validate_phone_number(value):
    if not re.match(r'^\d{10}$', value):
        raise ValidationError("Phone number must be in a valid format (e.g., '1234567890').")

class Profile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    phone_number = models.CharField(max_length=10, blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True)
    photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"
    
class Interest(models.Model):
    name = models.CharField(max_length=100, unique=True)
    icon = models.ImageField(upload_to='interest_icons/')

    def __str__(self):
        return self.name
    
class UserInterest(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name="user_interests")
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE, related_name="interested_users")
    added_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('profile', 'interest')  

    def __str__(self):
        return f"{self.profile.user.username}'s interest in {self.interest.name}"
