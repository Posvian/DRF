from rest_framework.serializers import ModelSerializer

from users.serializers import UserModelSerializer
from .models import Project, TODO


class ProjectModelSerializer(ModelSerializer):
    users = UserModelSerializer(read_only=True, many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(ModelSerializer):

    class Meta:
        model = TODO
        fields = '__all__'
