from __future__ import unicode_literals

from django.db.models import Model, CharField, FloatField


class University(Model):
    name = CharField(max_length=2048)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'universities'


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


class HomeTrip(AbstractChoice):
    pass


class GymMembership(AbstractChoice):
    pass


class Haircut(AbstractChoice):
    pass


class Shopping(AbstractChoice):
    pass


class Drink(AbstractChoice):
    pass


class RoundsForFriend(AbstractChoice):
    pass


class PostNightMeal(AbstractChoice):
    pass


class Taxi(AbstractChoice):
    pass
