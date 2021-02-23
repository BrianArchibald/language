from django.urls import path
from . import views

urlpattern = [
        path('', views.getRoutes, name='routes'),
        path('teachers/', views.getTeachers, name='teachers'),
]
