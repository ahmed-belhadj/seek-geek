# Generated by Django 2.1.3 on 2018-11-29 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0003_create_match'),
    ]

    operations = [
        migrations.AlterField(
            model_name='match',
            name='employer_action',
            field=models.CharField(blank=True, choices=[('SKIP', 'SKIP'), ('SUPER', 'SUPER'), ('CALL', 'CALL')], max_length=20),
        ),
        migrations.AlterField(
            model_name='match',
            name='seeker_action',
            field=models.CharField(blank=True, choices=[('SKIP', 'SKIP'), ('SUPER', 'SUPER'), ('APPLY', 'APPLY')], max_length=20),
        ),
    ]
