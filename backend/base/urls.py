from django.urls import path
from . import views

urlpatterns = [
        path('', views.getRoutes, name='routes'),
        path('teachers/', views.getTeachers, name='teachers'),
        path('teachers/<str:pk>/', views.getTeacher, name='teacher'),
]
