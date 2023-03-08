import math
import json

from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User

from users.views import UserCustomViewSet
from users.models import User
# Create your tests here.


class TestUserViewSet(TestCase):

    def setUp(self) -> None:
        self.name = 'admin'
        self.password = 'admin_123456789'
        self.email = 'admin_123456789@mail.ru'

        self.data = {'username': 'posv', 'first_name': 'Dmitrii', 'last_name': 'Posvianskii', 'email': 'posv@mail.ru'}
        self.data_put = {'username': 'posv1', 'first_name': 'Dima', 'last_name': 'Posv', 'email': 'posv57@mail.ru'}
        self.url = '/api/users/'
        self.admin = User.objects.create_superuser(username=self.name, password=self.password, email=self.email)

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        force_authenticate(request, self.admin)
        view = UserCustomViewSet.as_view({'get': 'list'})
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_admin(self):
        client = APIClient()
        user = User.objects.create(**self.data)
        client.login(username=self.name, password=self.password)
        response = client.put(f'{self.url}{user.id}/', self.data_put)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        auth = User.objects.get(id=user.id)
        self.assertEqual(auth.username, 'posv1')
        self.assertEqual(auth.first_name, 'Dima')
        self.assertEqual(auth.last_name, 'Posv')
        self.assertEqual(auth.email, 'posv57@mail.ru')
        client.logout()

    def tearDown(self) -> None:
        pass


class TestMath(APISimpleTestCase):
    def test_sqrt(self):
        response = math.sqrt(4)
        self.assertEqual(response, 2)


