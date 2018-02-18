from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^waitlist/data', views.data),
    url(r'^waitlist/dequeue', views.dequeue),
    url(r'^waitlist/', views.queue)
]
