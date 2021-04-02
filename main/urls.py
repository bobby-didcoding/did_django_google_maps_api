from django.urls import path
from . import views


app_name = "main"

urlpatterns = [
	
	path('', views.route, name="route"),
	path('map', views.map, name="map"),

	]