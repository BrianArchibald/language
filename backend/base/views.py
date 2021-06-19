from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from models import Teacher
from .teachers import teachers

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
    return Response(teachers)

@api_view(['GET'])
def getTeacher(request, pk):
    teacher = None
    for i in teachers:
        if i["_id"] == pk:
            teacher = i
            break
    return Response(teacher)
