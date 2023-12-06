from django.contrib import admin

# Register your models here.
from .models import log,investor,startup,project,investment
admin.site.register(log)
admin.site.register(investor)
admin.site.register(startup)
admin.site.register(project)
admin.site.register(investment)