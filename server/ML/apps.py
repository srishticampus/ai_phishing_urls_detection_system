#ML/apps.py
"""
This module contains the configuration for the ML app.
"""
from django.apps import AppConfig


class MlConfig(AppConfig):
    """
    Configuration class for the ML app.
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'ML'

    def ready(self):
        import ML.signals