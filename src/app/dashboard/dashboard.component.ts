import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  holidays:any
  name:any
  description:any

  date:any
  location:any
 
  totalHolidays:any

  staff:any
  totalStaffCount:any

  company:any
  totalCompanyCount:any


  setup:any
  totalstaffCount:any



  
  

  address:any
  phoneno:any
  contacctperson:any
  regdate:any
  noofemployee:any



 
  subsidiary:any
  asubsidiary:any
  department:any
  level:any
  gender:any
  position:any
  email:any
  manager:any
  data:any;
  positionid:any;
  levelid:any
  departmentid:any
  asubsidiaryid:any
  search:any



  set:any
  tname:any
  sdate:any
  cdate:any
  status:any


 
  

 
  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void 

   {
      this.GetHolidaysCount()
      this.GetStaffCounts()
      this.GetCompanyCounts()
      this.GetSetupCount()
      this.GetHolidays()
      this.GetCompany()
      this.GetStaff()
      this.GetSetup()
    }

  GetHolidaysCount()
  {
    this.AddresssService.GetHolidaysCount().subscribe(data=>{
      this.holidays=data;
      this.totalHolidays=data[0].totalHolidays
    })
  }


  GetStaffCounts()
  {
    this.AddresssService.GetStaffCounts().subscribe(data=>{
      this.staff=data;
      this.totalStaffCount=data[0].totalStaffCount
    })
  }
  
  GetCompanyCounts()
  {
    this.AddresssService.GetCompanyCounts().subscribe(data=>{
      this.company=data;
      this.totalCompanyCount=data[0].totalCompanyCount
    })
  }

  GetSetupCount()
  {
    this.AddresssService.GetSetupCount().subscribe(data=>{
      this.setup=data;
      this.totalstaffCount=data[0].totalstaffCount
    })
  }

  
  GetHolidays()
  {
    this.AddresssService.GetHolidays().subscribe(data=>{
      this.holidays=data;
    })
  }


  GetCompany()
  {
    debugger
    this.AddresssService.GetCompany().subscribe(data=>{
      this.company=data;
    })
  }

  GetStaff()
  {
    this.AddresssService.GetStaff().subscribe(data=>{
      this.staff=data;
    })
  }

  GetSetup()
  {
    this.AddresssService.GetSetup().subscribe(data=>{
      this.set=data;
    })
  }
  

  
}
