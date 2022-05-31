import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';
// import { EditComponent } from './edit/edit.component';
import { CategoryComponent } from './category/category.component';
import { TrainingComponent } from './training/training.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { CatgoryuserComponent } from './catgoryuser/catgoryuser.component';
import { SetupdetailsComponent } from './setupdetails/setupdetails.component';
import { TrainingdetailsComponent } from './trainingdetails/trainingdetails.component';
import { TopicformComponent } from './topicform/topicform.component';
import { TopicComponent } from './topic/topic.component';
import { ChatComponent } from './chat/chat.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { LeaveconversionComponent } from './leaveconversion/leaveconversion.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { StaffComponent } from './staff/staff.component';
import { HolidayformComponent } from './holidayform/holidayform.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { CompanyformComponent } from './companyform/companyform.component';
import { StaffformComponent } from './staffform/staffform.component';
import { FooterComponent } from './footer/footer.component';







const routes: Routes = [
  {path:'',redirectTo:'/Update',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'Login/:id',component:LoginComponent},

  {path:'Update',component:UpdateComponent},
  {path:'Header',component:HeaderComponent},


  {path:'',redirectTo:'/Category',pathMatch:'full'},
  {path:'Category',component:CategoryComponent},
  {path:'Catgoryuser',component:CatgoryuserComponent},
  {path:'Catgoryuser/:id',component:CatgoryuserComponent},


  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'Dashboard',component:DashboardComponent},


 {path:'',redirectTo:'',pathMatch:'full'},
 {path:'Setup',component:SetupComponent},
 {path:'Setupdetails',component:SetupdetailsComponent},
 {path:'Viewdetails',component:ViewdetailsComponent},
 {path:'Setupdetails/:id',component:SetupdetailsComponent},


 {path:'',redirectTo:'',pathMatch:'full'},
 {path:'Training',component:TrainingComponent},
{path:'Trainingdetails',component:TrainingdetailsComponent},
{path:'Trainingdetails/:id',component:TrainingdetailsComponent},

{path:'',redirectTo:'',pathMatch:'full'},
{path:'Topic',component:TopicComponent},




{path:'Topicform',component:TopicformComponent},
{path:'Topicform/:id',component:TopicformComponent},

{path:'',redirectTo:'',pathMatch:'full'},
{path:'Chat',component:ChatComponent},

{path:'',redirectTo:'',pathMatch:'full'},
{path:'Holidays',component:HolidaysComponent},
{path:'Holidayform',component:HolidayformComponent},
{path:'Holidayform/:id',component:HolidayformComponent},


{path:'',redirectTo:'',pathMatch:'full'},
{path:'Leaveconversion',component:LeaveconversionComponent},

{path:'',redirectTo:'',pathMatch:'full'},
{path:'Home',component:HomeComponent},

{path:'',redirectTo:'',pathMatch:'full'},
{path:'Company',component:CompanyComponent},
{path:'Companyform',component:CompanyformComponent},
{path:'Companyform/:id',component:CompanyformComponent},


{path:'',redirectTo:'',pathMatch:'full'},
{path:'Staff',component:StaffComponent},
{path:'Staffform',component:StaffformComponent},
{path:'Staffform/:id',component:StaffformComponent},






]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
