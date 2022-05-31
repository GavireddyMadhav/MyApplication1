import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetupComponent } from './setup/setup.component';
import { CategoryComponent } from './category/category.component';
import { TrainingComponent } from './training/training.component';
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

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CompanyformComponent } from './companyform/companyform.component';
import { StaffformComponent } from './staffform/staffform.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngb-modal';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpdateComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SetupComponent,
    CategoryComponent,
    TrainingComponent,
    CatgoryuserComponent,
    SetupdetailsComponent,
    TrainingdetailsComponent,
    TopicformComponent,
    TopicComponent,
    ChatComponent,
    HolidaysComponent,
    LeaveconversionComponent,
    HomeComponent,
    CompanyComponent,
    StaffComponent,
    HolidayformComponent,
    ViewdetailsComponent,
    CompanyformComponent,
    StaffformComponent,
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxDropzoneModule,
    Ng2SearchPipeModule,
    ModalModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
