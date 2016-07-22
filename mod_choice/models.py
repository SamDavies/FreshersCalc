from __future__ import unicode_literals

from django.db.models import Model, CharField, FloatField


class University(Model):
    name = CharField(max_length=2048)


class AbstractChoice(Model):
    name = CharField(max_length=2048)
    value = FloatField()

    def __unicode__(self):
        return self.name

    class Meta:
        abstract = True


class Accommodation(AbstractChoice):
    pass


class Catering(AbstractChoice):
    pass


class Item(AbstractChoice):
    pass


class HomeTrips(AbstractChoice):
    pass


class GymMembership(AbstractChoice):
    pass


class Haircut(AbstractChoice):
    pass


class Shopping(AbstractChoice):
    pass


class Drinks(AbstractChoice):
    pass


class RoundsForFriends(AbstractChoice):
    pass


class PostNightMeal(AbstractChoice):
    pass


class Taxi(AbstractChoice):
    pass
