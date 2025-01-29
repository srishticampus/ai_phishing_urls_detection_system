# models.py ML
"""
This module contains database models for the ML app

"""
from django.db import models
from accounts.models import Advertisement

class AdvertisementAnalysis(models.Model):
    """
    Model to store the analysis result of an advertisement's link.
    """
    advertisement = models.OneToOneField(
        Advertisement,
        on_delete=models.CASCADE,
        related_name="analysis"
    )
    prediction = models.CharField(
        max_length=10,
        verbose_name="Prediction",
        help_text="Prediction result from the ML model (safe/unsafe)."
    )
    analyzed_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Analyzed At"
    )

    def __str__(self):
        return f"{self.advertisement.title} - {self.prediction}"

    class Meta:
        verbose_name = "Advertisement Analysis"
        verbose_name_plural = "Advertisement Analyses"
        ordering = ["-analyzed_at"]
