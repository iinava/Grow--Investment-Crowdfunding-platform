from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [

     # _________________________________________Registration_____________________________________
     path('investorregisterApi', views.investorregisterApi.as_view(), name='investorregisterApi'),
     path('startupregisterApi', views.startupregisterApi.as_view(), name='startupregisterApi'),
     path('LoginAPIView', views.LoginAPIView.as_view(), name='LoginAPIView'),
      # _________________________________________view____________________________________________
     path('allstartupview', views.allstartupview.as_view(), name='allstartupview'),
     path('singlestartupview/<int:id>', views.singlestartupview.as_view(), name='singlestartupview'),
     path('allprojectview', views.allprojectview.as_view(), name='allprojectview'),
     path('ongoingprojectview', views.ongoingprojectview.as_view(), name='ongoingprojectview'),
     path('completedprojectview', views.completedprojectview.as_view(), name='completedprojectview'),
     path('singleprojectview/<int:id>', views.singleprojectview.as_view(), name='singleprojectview'),
     path('startupviewproject/<int:id>', views.startupviewproject.as_view(), name='startupviewproject'),
     path('allinvestorview', views.allinvestorview.as_view(), name='allinvestorview'),
     path('investorviewinvestment/<int:id>', views.investorviewinvestment.as_view(), name='investorviewinvestment'),
     path('startupviewinvesters/<int:id>', views.startupviewinvesters.as_view(), name='startupviewinvesters'),
     path('allinvestmentview', views.allinvestmentview.as_view(), name='allinvestmentview'),
     # ________________________________________add,update,delete__________________________________
     path('addprojectAPi', views.addprojectAPi.as_view(), name='addprojectAPi'),
     path('updateproject/<int:id>', views.updateproject.as_view(), name='updateproject'),
     path('deleteproject/<int:id>', views.deleteproject.as_view(), name='deleteproject'),
     path('investingapi', views.investingapi.as_view(), name='investingapi'),
]