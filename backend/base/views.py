from django.shortcuts import render
from django.http import JsonResponse
from .teachers import teachers

def getRoutes(request):
    return JsonResponse('hello', safe=False)

def getTeachers(request):
    return JsonResponse(teachers, safe=False)
