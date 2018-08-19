from django.shortcuts import render
from .models import Aces

# Create your views here.
def index(req):
    aces = Aces()
    return render(req,"views/index.html", { 'willBeConsoled': aces.greetings } )