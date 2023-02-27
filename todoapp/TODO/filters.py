from django_filters import rest_framework
from .models import Project, TODO


class ProjectFilter(rest_framework.FilterSet):
    name = rest_framework.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class TODOFilter(rest_framework.FilterSet):

    create = rest_framework.DateFromToRangeFilter()

    class Meta:
        model = TODO
        fields = ['project', 'create']