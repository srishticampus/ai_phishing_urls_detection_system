from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from .forms import RegistrationForm, LoginForm
from django.contrib.auth.decorators import login_required

def reg(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST, request.FILES)  # Include request.FILES for file uploads
        if form.is_valid():
            form.save()
            messages.success(request, "Registration successful. Please log in.")
            return redirect('login')
        else:
            messages.error(request, "Please correct the errors below.")
    else:
        form = RegistrationForm()

    return render(request, 'register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f"Welcome, {user.username}!")
                return redirect('home')
            else:
                messages.error(request, 'Invalid username or password.')
    else:
        form = LoginForm()

    return render(request, 'login.html', {'form': form})

@login_required
def home(request):
    return render(request, 'home.html')

def forgot_password(request):
    return render(request, 'forgot_password.html')

@login_required
def reset_password(request):
    return render(request, 'reset_password.html')