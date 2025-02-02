#ML/urls.py
"""
Urls configuration page for the app ML
"""
from django.urls import path
from .views import CheckAdvertiserMaliciousLinksView, AdvertisementSafetyCheck

urlpatterns = [
    path('check-malicious-links/<int:advertiser_id>/', CheckAdvertiserMaliciousLinksView.as_view(), 
         name='check-malicious-links'),
    path('advertisements/<int:ad_id>/check-safety/', AdvertisementSafetyCheck.as_view(),
        name='advertisement-safety-check'),
]
