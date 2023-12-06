from django.db import models

# Create your models here.

class log(models.Model):
     email=models.CharField(max_length=30,unique=True)
     password=models.CharField(max_length=30,unique=True)
     role=models.CharField(max_length=30,null=True)
     
     def __str__(self):
       return f'{self.email}  ( {self.role})'




class investor(models.Model):
   fname=models.CharField(max_length=30,null=True)
   lname=models.CharField(max_length=30,null=True)
   email=models.CharField(max_length=30,unique=True)
   phone=models.CharField(max_length=30,null=True)
   age=models.CharField(max_length=30,null=True)
   country=models.CharField(max_length=30,null=True)

   login=models.ForeignKey(log, on_delete=models.CASCADE)
   def __str__(self):
      return f'{self.fname}  ( {self.email})'

class startup(models.Model):
   fname=models.CharField(max_length=30,null=True)
   lname=models.CharField(max_length=30,null=True)
   profile=models.ImageField(upload_to="images",null=True,blank=True)
   email=models.CharField(max_length=30,unique=True)
   phone=models.CharField(max_length=30,null=True)
   age=models.CharField(max_length=30,null=True)
   country=models.CharField(max_length=30,null=True)

   login=models.ForeignKey(log, on_delete=models.CASCADE)
   def __str__(self):
      return f'{self.fname}  ( {self.email})'


class project(models.Model):
   projectname=models.CharField(max_length=30,null=True)
   sector=models.CharField(max_length=30,null=True)
   briefdesc=models.TextField(null=True)
   about=models.TextField(null=True)
   foundation=models.TextField(null=True)
   amount=models.CharField(max_length=30,null=True)
   initialamount=models.CharField(max_length=30,null=True)
   share=models.CharField(max_length=30,null=True)
   pricepershare=models.CharField(max_length=30,null=True)
   website=models.CharField(max_length=30,null=True)
   location=models.CharField(max_length=30,null=True)
   liscense=models.CharField(max_length=30,null=True)
   backimage=models.ImageField(upload_to="images",null=True,blank=True)
   projectstatus=models.CharField(null=True,max_length=30)

   startupid=models.ForeignKey(startup, on_delete=models.CASCADE)
   def __str__(self):
      return self.projectname




class investment(models.Model):
    startupid =models.ForeignKey(startup,on_delete=models.CASCADE)
    investorid=models.ForeignKey(investor,on_delete=models.CASCADE)
    projectid=models.ForeignKey(project,on_delete=models.CASCADE)

    # -------
    startupname=models.CharField(max_length=30,null=True)
    investorname=models.CharField(max_length=30,null=True)
    # ------
    projectname=models.CharField(max_length=30,null=True)
    share=models.CharField(max_length=30,null=True)
    pricepershare=models.CharField(max_length=30,null=True)
    investamount=models.CharField(max_length=30,null=True)
    period = models.CharField(max_length=100,null=True)  
    # ------
    invest_date = models.CharField(max_length=100)  
    investmentstatus=models.CharField(max_length=100,null=True,blank=True)


    def __str__(self):
         return f'{self.projectname}  ( {self.investorname})'




