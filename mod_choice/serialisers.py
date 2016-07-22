from rest_framework import serializers

from mod_choice.models import University, Accommodation, Catering, Item, HomeTrip, GymMembership, Haircut, Shopping, \
    Drink, RoundsForFriend, PostNightMeal, Taxi


class UniversitySerializer(serializers.ModelSerializer):
    class Meta:
        model = University


class AccommodationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accommodation


class CateringSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catering


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item


class HomeTripsSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeTrip


class GymMembershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = GymMembership


class HaircutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Haircut


class ShoppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shopping


class DrinksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink


class RoundsForFriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoundsForFriend


class PostNightMealSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostNightMeal


class TaxiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taxi
