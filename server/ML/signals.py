#ML/signals.py
"""
This module contains the signal to analyze advertisement
links whenever an advertisement is created or updated.
"""
from django.db.models.signals import post_save
from django.dispatch import receiver
from accounts.models import Advertisement
from .models import AdvertisementAnalysis
from .utils import analyze_url

@receiver(post_save, sender=Advertisement)
def analyze_advertisement(sender, instance, created, **kwargs):
    """
    Signal to analyze the advertisement link when created or updated.
    """
    if instance.link:  # Ensure link is present
        prediction = analyze_url(instance.link)  # Analyze the link

        # Save or update the analysis result
        AdvertisementAnalysis.objects.update_or_create(
            advertisement=instance,
            defaults={"prediction": prediction}
        )
