from django.conf.urls import url

from mod_choice import api

urlpatterns = [
    url(r'^university/$', api.UniversityList.as_view(), name='university'),
    url(r'^accommodation/$', api.AccommodationList.as_view(), name='accommodation'),
    url(r'^catering/$', api.CateringList.as_view(), name='catering'),
    url(r'^item/$', api.ItemList.as_view(), name='item'),
    url(r'^home_trips/$', api.HomeTripsList.as_view(), name='home_trips'),
    url(r'^gym_membership/$', api.GymMembershipList.as_view(), name='gym_membership'),
    url(r'^haircut/$', api.HaircutList.as_view(), name='haircut'),
    url(r'^shopping/$', api.ShoppingList.as_view(), name='shopping'),
    url(r'^drink/$', api.DrinksList.as_view(), name='drinks'),
    url(r'^round/$', api.RoundsForFriendsList.as_view(), name='rounds_for_friends'),
    url(r'^meal/$', api.PostNightMealList.as_view(), name='post_night_meal'),
    url(r'^taxi/$', api.TaxiList.as_view(), name='taxi'),
]
