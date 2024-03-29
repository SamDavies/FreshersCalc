from django.shortcuts import render

# Create your views here.
from django.views.decorators.clickjacking import xframe_options_exempt


@xframe_options_exempt
def index(request):
    return render(request, template_name='index.html')
