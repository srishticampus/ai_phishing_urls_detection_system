from django.contrib import admin
from .models import Reg

@admin.register(Reg)
class RegAdmin(admin.ModelAdmin):
    list_display = ('user', 'email', 'phone_number', 'age', 'interest')
    search_fields = ('user__username', 'email', 'phone_number')
