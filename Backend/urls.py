from django.urls import path
from . import views

urlpatterns = [
    path('api/user/', views.UserListCreate.as_view()),
    path('api/category/', views.CategoryList.as_view()),
]
