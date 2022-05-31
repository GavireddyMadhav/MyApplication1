import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-staffform',
  templateUrl: './staffform.component.html',
  styleUrls: ['./staffform.component.css']
})
export class StaffformComponent implements OnInit {
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
  id:any
  event:any
  showButton:any


  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      this.id = params['id']

      if (this.id != undefined) {
        this.GetStaff();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })
  }
  GetStaff(){
this.AddresssService.GetStaff().subscribe(data=>{
  this.staff=data.filter(x => x.id== this.id)
  let temp = data.filter(x => x.id==this.id)
  this.name= temp[0].name
  this.subsidiary=temp[0].subsidiary
  this.asubsidiary=temp[0].asubsidiary
  this.department=temp[0].department
  this.level=temp[0].level
  this.gender=temp[0].gender
  this.position=temp[0].position
  this.phoneno=temp[0].phoneno
  this.email=temp[0].email
  this.date=temp[0].date
  this.manager=temp[0].manager
})
  }

  public submit() {
    debugger
    var entity = {
      "name": this.name,
      "subsidiary":this.subsidiary,
      "asubsidiary":this.asubsidiary,
      "department":this.department,
      "level":this.level,
      "gender":this.gender,
      "position":this.position,
      "phoneno":this.phoneno,
      "email":this.email,
      "date":this.date,
      "manager":this.manager 
    }
    this.AddresssService.InsertStaff(entity).subscribe(data => {
      Swal.fire('Submited Sucessfully')
      location.href = "#/Staff"
    })
  }

  public edit(){
    var entity = {
      "id":this.id,
      "name": this.name,
      "subsidiary":this.subsidiary,
      "asubsidiary":this.asubsidiary,
      "department":this.department,
      "level":this.level,
      "gender":this.gender,
      "position":this.position,
      "phoneno":this.phoneno,
      "email":this.email,
      "date":this.date,
      "manager":this.manager 
    }
    this.AddresssService.UpdateStaff(entity).subscribe(data => {
      alert('Updated sucessfully')
      location.href = "#/Staff"

    })
   
  }


}



