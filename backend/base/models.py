from django.db import models
from django.contrib.auth.models import User

class Teacher(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    flag = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    # image =
    teachingLanguage = models.CharField(max_length=200, null=True, blank=True)
    speakingLanguage = models.CharField(max_length=200, null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numLessons = models.IntegerField(null=True, blank=True, default=0)
    description = models.TextField(null=True, blank=True)
    # video =
    online = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

