from django.contrib import admin
from django.urls import path, include # Adicione 'include'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), # Aponta para as URLs da nossa API
]