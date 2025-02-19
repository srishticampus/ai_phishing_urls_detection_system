#ML/urls.py
"""
Urls configuration page for the app ML
"""
from django.urls import path
from .views import (CheckAdvertiserMaliciousLinksView, AdvertisementSafetyCheck,
                    AdvertisementClickSafetyCheckView)

urlpatterns = [
    path('check-malicious-links/<int:advertiser_id>/', CheckAdvertiserMaliciousLinksView.as_view(), 
         name='check-malicious-links'),
    path('advertisements/<int:ad_id>/check-safety/', AdvertisementSafetyCheck.as_view(),
        name='advertisement-safety-check'),
        path('advertisements/<int:ad_id>/click-safety-check/', AdvertisementClickSafetyCheckView.as_view(),
         name='advertisement-click-safety-check'),
]
