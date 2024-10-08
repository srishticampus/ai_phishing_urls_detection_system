from django import forms
from django.contrib.auth.models import User
from .models import Reg
import re

class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput, label="Password")
    password_confirm = forms.CharField(widget=forms.PasswordInput, label="Confirm Password")
    age = forms.IntegerField(required=False, min_value=0, label="Age")
    interest = forms.ChoiceField(choices=Reg.INTEREST_CHOICES, label="Interest")
    photo = forms.ImageField(required=False, label="Profile Photo")
    phone_number = forms.CharField(max_length=15, label="Phone Number")

    class Meta:
        model = Reg
        fields = ['username', 'email', 'address', 'age', 'interest', 'photo', 'phone_number']

    username = forms.CharField(max_length=150, required=True, label="Username")

    def clean_username(self):
        username = self.cleaned_data.get('username')
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError("Username already exists.")
        return username

    def clean_phone_number(self):
        phone_number = self.cleaned_data.get('phone_number')
        # Simple regex for phone number validation
        if not re.match(r'^\+?1?\d{9,15}$', phone_number):
            raise forms.ValidationError("Enter a valid phone number.")
        if Reg.objects.filter(phone_number=phone_number).exists():
            raise forms.ValidationError("Phone number already in use.")
        return phone_number

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        password_confirm = cleaned_data.get("password_confirm")

        if password and password_confirm and password != password_confirm:
            self.add_error('password_confirm', "Passwords do not match.")

    def save(self, commit=True):
        username = self.cleaned_data['username']
        password = self.cleaned_data['password']
        user = User.objects.create_user(username=username, password=password)
        user.is_active = True
        if commit:
            user.save()

        reg = Reg(
            user=user,
            email=self.cleaned_data['email'],
            address=self.cleaned_data['address'],
            age=self.cleaned_data.get('age'),
            interest=self.cleaned_data['interest'],
            photo=self.cleaned_data.get('photo'),
            phone_number=self.cleaned_data['phone_number']
        )
        if commit:
            reg.save()
        return user

class LoginForm(forms.Form):
    username = forms.CharField(max_length=150, required=True, label="Username")
    password = forms.CharField(widget=forms.PasswordInput, required=True, label="Password")
