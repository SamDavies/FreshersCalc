# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-15 00:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mod_paper', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='url',
            field=models.CharField(default='', max_length=2048),
            preserve_default=False,
        ),
    ]
