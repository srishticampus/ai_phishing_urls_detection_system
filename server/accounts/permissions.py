#permissions.py
from rest_framework import permissions

class IsAdminorReadOnly(permissions.BasePermission):
    """
    Custom permission to allow only admin users to edit the data.
    """
    def has_permission(self,request,view):
        """
            Allow safe methods like GET,HEAD,OPTIONS for all users
        """
        if request.method in permissions.SAFE_METHODS:
            return True
        #Allow only admin users to edit the data
        return request.user.is_authenticated and request.user.user_type == 'admin'
