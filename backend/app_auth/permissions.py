from rest_framework.permissions import BasePermission


class RolePermission(BasePermission):
    """
    Custom permission to allow access based on user roles.
    """

    allowed_roles = []

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_authenticated and request.user.role in self.allowed_roles)