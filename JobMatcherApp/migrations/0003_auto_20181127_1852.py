# Generated by Django 2.1.3 on 2018-11-27 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('JobMatcherApp', '0002_employer_seeker'),
    ]

    operations = [
        migrations.AddField(
            model_name='employer',
            name='credits',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='employer',
            name='free_calls',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='employer',
            name='postings',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='seeker',
            name='credits',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='seeker',
            name='free_apps',
            field=models.IntegerField(default=5),
        ),
    ]
