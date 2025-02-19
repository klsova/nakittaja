from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, serializers, viewsets
from .models import Event
from .serializers import EventSerializer


# Serializer to convert the Event model into JSON format
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

# API View to retrieve events
@api_view(['GET'])
def get_events(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

# API View to create events
@api_view(['POST'])
def create_event(request):
    serializer = EventSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)