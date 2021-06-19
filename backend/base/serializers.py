from rest_framework import serializers
from django.contrib.auth.models import User
from models import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'
