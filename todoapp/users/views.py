from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.permissions import IsAdminUser

from .models import User
from .serializers import UserModelSerializer


class UserCustomViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin,
                        viewsets.GenericViewSet):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
