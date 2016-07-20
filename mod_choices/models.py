from __future__ import unicode_literals

from django.db.models import Model, CharField, FloatField


class AbstractChoice(Model):
    name = CharField(max_length=2048)
    value = FloatField()

    class Meta:
        abstract = True
