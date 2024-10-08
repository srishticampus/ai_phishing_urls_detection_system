# models.py

from django.db import models
from django.contrib.auth.models import User

class Reg(models.Model):
    INTEREST_CHOICES = [
        ('technology', 'Technology'),
        ('sports', 'Sports'),
        ('music', 'Music'),
        ('art', 'Art'),
        # Add more interests as needed
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(default='example@gmail.com')
    address = models.CharField(max_length=255, default='Not provided')
    age = models.PositiveIntegerField(null=True, blank=True)
    interest = models.CharField(max_length=50, choices=INTEREST_CHOICES, default='technology')
    photo = models.ImageField(upload_to='profile_photos/', null=True, blank=True)
    phone_number = models.CharField(max_length=15, unique=True, null=True, blank=True)  # Modified here

    def __str__(self):
        return self.user.username
