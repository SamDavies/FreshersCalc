from rest_framework.serializers import ModelSerializer, SerializerMethodField

from mod_course.serialisers import CourseSerializer
from mod_choices.models import Paper


class PaperSerializer(ModelSerializer):
    course = CourseSerializer()
    year = SerializerMethodField()
    month = SerializerMethodField()

    def get_year(self, course):
        return course.date.year

    def get_month(self, course):
        return course.date.strftime('%B')

    class Meta:
        model = Paper
        fields = ('id', 'course', 'url', 'date', 'year', 'month')
        read_only_fields = ('id', 'year', 'month')
