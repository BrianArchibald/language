from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from models import Teacher
from .teachers import teachers
from .serializers import Teacher

@api_view(['GET'])
def getRoutes(request):
    routes = [
            '/api/teachers/',
            '/api/teachers/create/',
            '/api/teachers/upload/',
            '/api/teachers/<id>/reviews/',
            '/api/teachers/top/',
            '/api/teachers/<id>/',
            '/api/teachers/delete/<id>/',
            '/api/teachers/<update>/<id>/',
            ]
    return Response(routes)

@api_view(['GET'])
def getTeachers(request):
    teachers = Teacher.objects.all()
    serializer = TeacherSerializer(teachers, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTeacher(request, pk):
    teacher = Teacher.objects.get(_id=pk)
    serializer = TeacherSerializer(teacher, many=False)
    return Response(serializer.data)
