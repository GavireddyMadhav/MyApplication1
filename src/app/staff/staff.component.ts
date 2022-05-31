import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff:any
  name:any
  subsidiary:any
  asubsidiary:any
  department:any
  level:any
  gender:any
  position:any
  phoneno:any
  email:any
  date:any
  manager:any
  data:any;
  positionid:any;
  levelid:any
  departmentid:any
  asubsidiaryid:any
  search:any

  constructor(public AddresssService: AddresssService) { }
  ngOnInit(): void {
    this.positionid='0'
    this.levelid=0
    this.positionid=0
    this.asubsidiaryid=0
    this.departmentid=0
    this.GetStaff()
  }

  GetStaff(){
    this.AddresssService.GetStaff().subscribe(data=>{
      this.staff=data;
    })
  }


  public filterposition(){
    this.AddresssService.GetStaff().subscribe(data=>{
      this.staff=data.filter(x => x.id==this.positionid)
    })
  }

  public filterlevel(){
    this.AddresssService.GetStaff().subscribe(data=>{
      this.staff=data.filter(x=> x.id==this.levelid)
    })
  }

  public filterdepartment(){
    this.AddresssService.GetStaff().subscribe(data=>{
      this.staff=data.filter(x => x.id==this.departmentid)
    })
  }


  public filtersubsidiary(){
    this.AddresssService.GetStaff().subscribe(data=>[
      this.staff=data.filter(x=> x.id==this.asubsidiaryid)
    ])
  }



  delete(id:any){
    this.AddresssService.DeleteStaff(id).subscribe(data=>{
      alert('Deleted')
      this.GetStaff()
    })
  }

  edit(id:any){
    location.href= "#/Staffform/" + id
  }

}
