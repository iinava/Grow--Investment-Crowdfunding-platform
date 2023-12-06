from rest_framework import serializers
from .models import log,investor,startup,project,investment


class loginserializer(serializers.ModelSerializer):
    class Meta:
        model=log
        fields='__all__'
    def Create (self,validated_data):
        return log.objects.Create(**validated_data)   

class investorserializer(serializers.ModelSerializer):
    class Meta:
        model=investor
        fields='__all__'
    def Create (self,validated_data):
        return investor.objects.Create(**validated_data)   

class startupserializer(serializers.ModelSerializer):
    class Meta:
        model=startup
        fields='__all__'
    def Create (self,validated_data):
        return startup.objects.Create(**validated_data)   

class projectserializer(serializers.ModelSerializer):
    class Meta:
        model=project
        fields='__all__'
    def Create (self,validated_data):
        return project.objects.Create(**validated_data)   
class investmentserializer(serializers.ModelSerializer):
    class Meta:
        model=investment
        fields='__all__'
    def Create (self,validated_data):
        return investment.objects.Create(**validated_data)   