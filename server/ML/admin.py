#ML/admin.py
"""
This module contains the admin configuration for the ML app.
"""
from django.contrib import admin
from .models import AdvertisementAnalysis

@admin.register(AdvertisementAnalysis)
class AdvertisementAnalysisAdmin(admin.ModelAdmin):
    """
    Admin configuration for the AdvertisementAnalysis model.
    """
    list_display = ("advertisement", "prediction", "analyzed_at")
    list_filter = ("prediction",)
