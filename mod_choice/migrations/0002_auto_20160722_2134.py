# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-22 21:34
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mod_choice', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='HomeTrips',
            new_name='Drink',
        ),
        migrations.RenameModel(
            old_name='RoundsForFriends',
            new_name='HomeTrip',
        ),
        migrations.RenameModel(
            old_name='Drinks',
            new_name='RoundsForFriend',
        ),
    ]