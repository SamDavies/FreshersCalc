from rest_framework import generics

from mod_choice.models import University, Accommodation, Catering, Item, HomeTrip, GymMembership, Haircut, Shopping, \
    Drink, RoundsForFriend, PostNightMeal, Taxi
from mod_choice.serialisers import UniversitySerializer, AccommodationSerializer, CateringSerializer, ItemSerializer, \
    HomeTripsSerializer, GymMembershipSerializer, HaircutSerializer, ShoppingSerializer, DrinksSerializer, \
    RoundsForFriendsSerializer, PostNightMealSerializer, TaxiSerializer


class UniversityList(generics.ListAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer


class AccommodationList(generics.ListAPIView):
    queryset = Accommodation.objects.all()
    serializer_class = AccommodationSerializer


class CateringList(generics.ListAPIView):
    queryset = Catering.objects.all()
    serializer_class = CateringSerializer


class ItemList(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class HomeTripsList(generics.ListAPIView):
    queryset = HomeTrip.objects.all()
    serializer_class = HomeTripsSerializer


class GymMembershipList(generics.ListAPIView):
    queryset = GymMembership.objects.all()
    serializer_class = GymMembershipSerializer


class HaircutList(generics.ListAPIView):
    queryset = Haircut.objects.all()
    serializer_class = HaircutSerializer


class ShoppingList(generics.ListAPIView):
    queryset = Shopping.objects.all()
    serializer_class = ShoppingSerializer


class DrinksList(generics.ListAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinksSerializer


class RoundsForFriendsList(generics.ListAPIView):
    queryset = RoundsForFriend.objects.all()
    serializer_class = RoundsForFriendsSerializer


class PostNightMealList(generics.ListAPIView):
    queryset = PostNightMeal.objects.all()
    serializer_class = PostNightMealSerializer


class TaxiList(generics.ListAPIView):
    queryset = Taxi.objects.all()
    serializer_class = TaxiSerializer
