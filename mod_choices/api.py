from rest_framework import status
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from mod_choices.models import Paper
from mod_choices.serialisers import PaperSerializer

from datetime import date


class PaperList(APIView):
    authentication_classes = (BasicAuthentication, JSONWebTokenAuthentication)
    permission_classes = (IsAuthenticated,)

    def get(self, request, course_id, format=None):
        courses = Paper.objects.filter(course_id=course_id)
        serializer = PaperSerializer(courses, many=True)
        return Response(serializer.data)

    def post(self, request, course_id, format=None):
        data = request.data
        paper_date = date(int(data.get('year')), int(data.get('month')), 1)
        paper = Paper.objects.create(url=data.get('url'), course_id=course_id, date=paper_date)
        serializer = PaperSerializer(paper)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
