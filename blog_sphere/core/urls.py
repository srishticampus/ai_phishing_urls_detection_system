from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.landing_view, name='landing'),
    path('about/', views.about_us_view, name='about_us'),
    path('contact/', views.contact_us_view, name='contact_us'),
    path('services/', views.services_view, name='services'),
    path('userhome/', views.user_home_view, name='user_home'),
]
