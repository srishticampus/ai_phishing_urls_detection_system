from django.urls import path
from django.contrib.auth.views import LogoutView
from . import views

app_name = 'accounts'
urlpatterns = [
    path('register/', views.reg, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('home/', views.home, name='home'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('reset_password/', views.reset_password, name='reset_password'),
    # Add other URLs as needed
]
