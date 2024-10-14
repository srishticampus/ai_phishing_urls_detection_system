from django.shortcuts import render

# Create your views here.

def landing_view(request):
    return render(request, 'core/landing.html')

def about_us_view(request):
    return render(request, 'core/about_us.html')

def contact_us_view(request):
    return render(request, 'core/contact_us.html')

def services_view(request):
    return render(request, 'core/services.html')

def user_home_view(request):
    return render(request, 'core/user_home.html')
