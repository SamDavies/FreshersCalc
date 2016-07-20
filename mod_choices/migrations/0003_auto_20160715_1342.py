# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-07-15 13:42
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mod_paper', '0002_paper_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paper',
            name='course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mod_course.Course'),
        ),
    ]
