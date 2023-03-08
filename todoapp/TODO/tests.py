import math
import json

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from users.models import User

from .views import ProjectCustomDjangoFilterViewSet
from .models import Project


class TestProjectViewSet(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectCustomDjangoFilterViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestProjectViewSetApi(APITestCase):

    def setUp(self) -> None:

        self.name = 'admin'
        self.password = 'admin_123456789'
        self.email = 'admin_123456789@mail.ru'
        self.data_user = {'username': 'posv', 'first_name': 'Dmitrii', 'last_name': 'Posvianskii', 'email': 'posv@mail.ru'}
        self.user = User.objects.create(**self.data_user)
        self.data = {'name': 'project_1', 'repo_link': 'Dmitrii@mail.ru', 'users': self.user}
        self.data_put = {'name': 'project_new', 'repo_link': 'link@mail.ru', 'users': self.user}
        self.url = '/api/projects/'
        self.admin = User.objects.create_superuser(username=self.name, password=self.password, email=self.email)

    def test_get_list(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_put_admin(self):
        project = mixer.blend(Project)
        self.client.login(username=self.name, password=self.password)
        response = self.client.put(f'{self.url}{project.id}/', {'name': 'pr2', 'repo_link': 'posv2@mail.ru',
                                                                'users': project.users})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        project = Project.objects.get(id=project.id)
        self.assertEqual(project.name, 'pr2')


    def tearDown(self) -> None:
        pass

