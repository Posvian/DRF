from django.db import models

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=128)
    repo_link = models.URLField(null=True)
    users = models.ManyToManyField(User)


class TODO(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    text = models.TextField()
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    active = models.BooleanField(default=True)



