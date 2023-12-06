from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import log,investor,startup,project,investment
from fundingapp.serializers import loginserializer,investorserializer,startupserializer,projectserializer,investmentserializer
from django.conf import settings
from datetime import date
# Create your views here.

# _________________________________________investor registration__________________________________________________

class investorregisterApi(GenericAPIView):
    serializer_class=investorserializer
    serializer_class_login=loginserializer

    def post(self,request):
        login_id:''
        fname=request.data.get("fname")
        lname=request.data.get("lname")
        email=request.data.get("email")
        phone=request.data.get("phone")
        age=request.data.get("age")
        country=request.data.get("country")
       
        password=request.data.get("password")
        role="investor"
        userstatus='0'
        
        if(log.objects.filter(email=email)):
            return Response({'message':'Duplicate email found'},status.HTTP_400_BAD_REQUEST)

        else:
            serializer_login=self.serializer_class_login(data={'email':email,'password':password,'role':role})   

        if serializer_login.is_valid():
            Log=serializer_login.save()
            login_id=Log.id
            print(login_id)
        serializer=self.serializer_class(
            data={
            'fname':fname,
            'lname':lname,
            'email':email,
            'phone':phone,
            'age':age,
            'country':country,
            'userstatus':userstatus,
            'login':login_id,
            }
        ) 
        print(serializer)
        if serializer.is_valid():
            print('hi')
            serializer.save()
            return Response({'data':serializer.data,'message':"investor registration is succesful","success":True},status=status.HTTP_201_CREATED)
        return Response ({'data':serializer.errors,'message':'user registration  failed',"success":False},status= status.HTTP_400_BAD_REQUEST)  


# _________________________________________startup registration__________________________________________________

class startupregisterApi(GenericAPIView):
    serializer_class=startupserializer
    serializer_class_login=loginserializer

    def post(self,request):
        login_id:''
        fname=request.data.get("fname")
        lname=request.data.get("lname")
        profile=request.data.get("image")
        email=request.data.get("email")
        phone=request.data.get("phone")
        age=request.data.get("age")
        country=request.data.get("country")
       
        password=request.data.get("password")
        role="startup"
        # userstatus='0'
        
        if(log.objects.filter(email=email)):
            return Response({'message':'Duplicate email found'},status.HTTP_400_BAD_REQUEST)

        else:
            serializer_login=self.serializer_class_login(data={'email':email,'password':password,'role':role})   

        if serializer_login.is_valid():
            Log=serializer_login.save()
            login_id=Log.id
            print(login_id)
        serializer=self.serializer_class(
            data={
            'fname':fname,
            'lname':lname,
            'profile':profile,
            'email':email,
            'phone':phone,
            'age':age,
            'country':country,
            # 'userstatus':userstatus,
            'login':login_id,
            }
        ) 
        print(serializer)
        if serializer.is_valid():
            print('hi')
            serializer.save()
            return Response({'data':serializer.data,'message':"startup registration is succesful","success":True},status=status.HTTP_201_CREATED)
        return Response ({'data':serializer.errors,'message':'user registration  failed',"success":False},status= status.HTTP_400_BAD_REQUEST)   

# _______________________________________________________allstarttup view____________________________________________________


class allstartupview(GenericAPIView):
    serializer_class=startupserializer
    def get(self,request):
        queryset=startup.objects.all()
        if(queryset.count()>0):
            serializer=startupserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all startup data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    

# ___________________________________________________all investor view_________________________________________________________

class allinvestorview(GenericAPIView):
    serializer_class=investorserializer
    def get(self,request):
        queryset=investor.objects.all()
        if(queryset.count()>0):
            serializer=investorserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all investor data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    




 # ________________________________________________________login_____________________________________________________________

 
class LoginAPIView(GenericAPIView):
    serializer_class = loginserializer
    def post (self,request):
        u_id= ''
        email = request.data.get('email')
        password = request.data.get('password')

        print(email)
        print(password)
        logreg=log.objects.filter(email=email,password=password)
        #print(logreg)
        #print(logreg.count)
        if(logreg.count()>0):
            read_serializer = loginserializer(logreg, many=True)
            for i in read_serializer.data:
                id=i['id']
                role=i['role']
                email=i['email']

                print(id)
                print(role)
                investorreg = investor.objects.all().filter(login= id).values()
                print(investorreg)
 
                for i in investorreg:
                    u_id = i['id']
                    fname = i['fname']
                    lname=i['lname']
                    email=i['email']
                    phone=i['phone']
                   

                    # l_status=i['userstatus']
                    print(u_id)
                    # --------------------------------------------------------------
                startupreg = startup.objects.all().filter(login= id).values()
                print(startupreg)
 
                for i in startupreg:
                    u_id = i['id']
                    fname = i['fname']
                    lname=i['lname']
                    email=i['email']
                    phone=i['phone']
                  

                    # l_status=i['userstatus']
                    print(u_id)
                #   -----------------------------------------------------------------
            return Response({
                'data':{
                    
                    'login_id':id,
                    'role':role,
                    'fname':fname,
                    'lname':lname,
                    'email':email,
                    'phone':phone,


                    'password':password,


                    'userid':u_id
                }
            })

        else:
            return Response({
                'message':'email is invalid',
                'success':'false'
            },status=status.HTTP_400_BAD_REQUEST)          






# ___________________________________________________________adding project__________________________________________________


class addprojectAPi(GenericAPIView):
    serializer_class=projectserializer


    def post(self,request):
        projectname=request.data.get("projectname")
        sector=request.data.get("sector")
        briefdesc=request.data.get("briefdesc")
        about=request.data.get("about")
        foundation=request.data.get("foundation")
        amount=request.data.get("amount")
        share=request.data.get("share")
        website=request.data.get("website")
        location=request.data.get('location')
        liscense=request.data.get('liscense')
        backimage=request.data.get('backimage')
        startupid=request.data.get('startupid')
        initialamount="0"
        pricepershare=int(amount)/int(share)
        projectstatus="0"



        serializer=self.serializer_class(data={'projectname':projectname, 'sector':sector,'briefdesc':briefdesc,'about':about,'foundation':foundation,'amount':amount,'initialamount':initialamount,'share':share,'website':website,'location':location,'liscense':liscense,'backimage':backimage,'startupid':startupid,'pricepershare':pricepershare})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'project was added susccesfully','success':'1'},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'adding project was failed','success':'0'},status=status.HTTP_400_BAD_REQUEST)    


# ________________________________________________________________________________all  project view_______________________________________________________________

class allprojectview(GenericAPIView):
    serializer_class=projectserializer
    def get(self,request):
        queryset=project.objects.all()
        if(queryset.count()>0):
            serializer=projectserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all project data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    

# ________________________________________________________________________________single  project view_______________________________________________________________


class singleprojectview(GenericAPIView):
    def get(self,request,id):
        queryset=project.objects.get(pk=id)
        serializer=projectserializer(queryset)
        return Response({'data':serializer.data,'messgae':'project data view','success':True},status=status.HTTP_200_OK)

# ________________________________________________________________________________startup viewing project _______________________________________________________________


class startupviewproject(GenericAPIView):
    serializer_class=projectserializer
    def get(self,request,id):
        queryset=project.objects.filter(startupid=id).values()
        for obj in queryset:
            
            obj['backimage'] = settings.MEDIA_URL + str(obj['backimage'])
        return Response({'data':queryset,'message':'all project data  set' ,'success':1},status=status.HTTP_200_OK)
# ________________________________________________________________________________delete projects _______________________________________________________________


class deleteproject(GenericAPIView):

    def delete(self,request,id):
        deletesh=project.objects.get(pk=id)
        deletesh.delete()
        return Response({'message':'Deleted suscesfully','sucess':True},status=status.HTTP_200_OK)


# ________________________________________________________________________________update  project _______________________________________________________________

class updateproject(GenericAPIView):
    serializer_class=projectserializer
    def post(self,request,id):
        queryset=project.objects.get(pk=id)
        print(queryset)
        serializer=projectserializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():



            serializer.save()
            return Response({'data':serializer.data,'message':'updated succesfulluyy','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','sucess':False},status=status.HTTP_400_BAD_REQUEST)



# ________________________________________________________________________________single startup view  _______________________________________________________________


class singlestartupview(GenericAPIView):
    def get(self,request,id):
        queryset=startup.objects.get(pk=id)
        serializer=startupserializer(queryset)
        return Response({'data':serializer.data,'messgae':'single startuo view','success':True},status=status.HTTP_200_OK)            




# ______________________________________________investing api_________________________________________________________________



class investingapi(GenericAPIView):
    serializer_class = investmentserializer

    def post(self, request):
        

        
        startupid = request.data.get('startupid')
        investorid=request.data.get("investorid")
        projectid=request.data.get('projectid')
        period=request.data.get('period')
        invest_date = str(date.today())
        print(projectid)
        ishare = int(request.data.get('ishare'))
        pricepershare = float(request.data.get('pricepershare'))

        # Calculate investamount
        investamount = ishare * pricepershare
        # bkquantity=int(quty)
        investmentstatus="0"
        
        investments = investment.objects.filter(investorid=investorid, projectid=projectid)
        if investments.exists():
            return Response({'message':'  You have aldready investead in this project','success':False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            data=project.objects.all().filter(id=projectid).values()
            for i in data:
                # print(i)
                projectname=i['projectname']
               

            pdata=project.objects.get(id=projectid)
            pinitialamount=float(pdata.initialamount)
            pshare=pdata.share
            sharecount=int(pshare)
            if sharecount <= 0:
                 return Response({'message':' out of stock','success':False}, status=status.HTTP_400_BAD_REQUEST)
            elif sharecount < ishare:
                 return Response({'message': 'Not enough stocks', 'success': False}, status=status.HTTP_400_BAD_REQUEST)
            else:



                pdata.share = sharecount-ishare
                pdata.initialamount= investamount+pinitialamount
                pdata.save()
                
      
                # pdata.save()
   

                data2=startup.objects.all().filter(id=startupid).values()
                for i in data2:
                    print(i)
                    startupname=i['fname']
                    
                data3=investor.objects.all().filter(id=investorid).values()
                for i in data3:
                    print(i)
                    investorname=i['fname']
                    




                # peto = pet.objects.get(id=product)
                # pet_image =peto.image
                # print(pet_image)
                    


                serializer = self.serializer_class(data= {'startupname':startupname,'investorname':investorname,'startupid':startupid,'investorid':investorid,'projectid':projectid,'projectname':projectname,'share':ishare,'pricepershare':pricepershare,'investamount':investamount,'invest_date':invest_date,'investmentstatus':investmentstatus,'period':period})
                print(serializer)
                print("pdata.amount:", pdata.amount)
                print("int(pdata.initialamount):", int(pdata.initialamount))

                tolerance = 1e-6  # You can adjust this based on your precision requirements

                if abs(float(pdata.amount) - float(pdata.initialamount)) < tolerance:
                    pdata.projectstatus = "1"
                    pdata.save()
                    print("njan one aay")
                else:
                    pdata.projectstatus = "0"
                    pdata.save()
                    print("njan oru thengayum")
                    print(pdata.amount, int(pdata.initialamount))

                if serializer.is_valid():
                    print("hi")
                    serializer.save()
                    return Response({'data':serializer.data,'message':'booking added successfully', 'success':True}, status = status.HTTP_201_CREATED)

                return Response({'data':serializer.errors,'message':'Invalid','success':False}, status=status.HTTP_400_BAD_REQUEST)




# _______________________________________________________investor view investmets____________________________________________


class investorviewinvestment(GenericAPIView):
    serializer_class=investmentserializer
    def get(self,request,id):
        queryset=investment.objects.filter(investorid=id).values()
        return Response({'data':queryset,'message':'all investment data  set' ,'success':1},status=status.HTTP_200_OK)


# _______________________________________________________allinvestment view____________________________________________

class allinvestmentview(GenericAPIView):
    serializer_class=investmentserializer
    def get(self,request):
        queryset=investment.objects.all()
        if(queryset.count()>0):
            serializer=investmentserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all invdata data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED) 


# _______________________________________________________startup viewing investors ____________________________________________               
            
class startupviewinvesters(GenericAPIView):
    serializer_class=investmentserializer
    def get(self,request,id):
        queryset=investment.objects.filter(projectid=id).values()
        return Response({'data':queryset,'message':'all pet booking  set' ,'success':1},status=status.HTTP_200_OK)





# _______________________________________________________ongoing projects =0____________________________________________


class ongoingprojectview(GenericAPIView):
    serializer_class=projectserializer
    def get(self,request):
        queryset = project.objects.filter(projectstatus="0")
        if(queryset.count()>0):
            serializer=projectserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'ongoing project data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    

# _______________________________________________________icompleted projects =1____________________________________________            

class completedprojectview(GenericAPIView):
    serializer_class=projectserializer
    def get(self,request):
        queryset = project.objects.filter(projectstatus="1")
        if(queryset.count()>0):
            serializer=projectserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'completed project data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    
