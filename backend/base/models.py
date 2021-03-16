from django.db import models
from django.contrib.auth.models import User

class Teacher(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    flag = models.CharField(max_length=200, null=True, blank=True)
    rate = models.DecimalField(max_digits=7, decimal_places=2)
    # image =
    teachingLanguage = models.CharField(max_length=200, null=True, blank=True)
    speakingLanguage = models.CharField(max_length=200, null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2)
    reviews =
    numLessons = models.IntegerField(null=True, blank=True, default=0)
    description = models.TextField(null=True, blank=True)
    video =
    bookTeacher =
    calendarPreview =
    messageTeacher =
    online =
    _id =

