from django.urls import path
from . import views

urlpatterns = [
    path('', views.experiment, name='experiment'),
    path('theory/', views.theory, name='theory'),
    path('pretest/', views.pretest, name='pretest'),
    path('procedure/', views.procedure, name='procedure'),
    path('simulation/', views.simulation, name='simulation'),
    path('posttest/', views.posttest, name='posttest'),
    path('references/', views.references, name='references'),
    path('contributors/', views.contributors, name='contributors'),
    path('feedback/', views.feedback, name='feedback'),
]
