"""Grades URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework import routers

from mod_auth import api as auth_api
from mod_auth import views as auth_views
from mod_course import api as course_api
from mod_stats import api as stats_api


from mod_choices import urls as paper_urls

router = routers.SimpleRouter()
router.register(r'users', auth_api.UserList)
router.register(r'users', auth_api.UserDetail)
router.register(r'register', auth_api.RegisterViewSet, base_name='register')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^web/.*/$', auth_views.index),
    url(r'^api/', include(router.urls)),
    url(r'^api/', include(paper_urls)),
    url(r'^api-token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
    url(r'^api/course/$', course_api.UserCourseList.as_view(), name='course_list'),
    url(r'^api/course/(?P<pk>[0-9]+)/$', course_api.UserCourseDetail.as_view(), name='course_detail'),
    url(r'^api/university/(?P<uni_id>[0-9]+)/course/$', course_api.CourseList.as_view(), name='course_list'),
    url(r'^api/stats/$', stats_api.StatsView.as_view(), name='my_stats'),
]
