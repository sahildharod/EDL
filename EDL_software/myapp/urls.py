from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello_world, name='hello_world'),
    path('data/', views.api_data, name = 'data'),
    path('adata/', views.api_acceleration_data, name = 'adata'),
    path('vdata/', views.api_velocity_data, name = 'vdata'),
    path('edata/', views.api_e_data, name = 'edata'),
    path('sdata/',views.api_slot_data, name = 'sdata'),
]   