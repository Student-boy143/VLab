from django.shortcuts import render

# Create your views here.

def experiment(request):
    return render(request, 'vlab/experiment.html')
