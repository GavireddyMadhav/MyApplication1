import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddresssService } from '../addresss.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.css']
})
export class CompanyformComponent implements OnInit {
  company:any
  name:any
  address:any
  phoneno:any
  contactperson:any
  regdate:any
  noofemployee:any
  id:any
  showButton:any


  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      this.id = params['id']

      if (this.id != undefined) {
        this.GetCompany();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })
  }

  GetCompany()
  {
    this.AddresssService.GetCompany().subscribe(data=>{
      this.company=data.filter(x => x.id==this.id)
      let temp =data.filter(x => x.id==this.id)
      this.name=temp[0].name,
      this.address=temp[0].address,
      this.phoneno=temp[0].phoneno,
      this.contactperson=temp[0].contactperson,
      this.regdate=temp[0].regdate,
      this.noofemployee=temp[0].noofEmployee
    })
  }

  public submit()
  {
    var entity={
      "name":this.name,
      "address":this.address,
      "phoneno":this.phoneno,
      "contactperson":this.contactperson,
      "regdate":this.regdate,
      "noofEmployee":this.noofemployee
    }
    this.AddresssService.InsertCompany(entity).subscribe(data=>{
      Swal.fire('submitted Sucessfully')
      location.href="#/Company"
    })
  }

  public edit()
  {
    var entity={
      "id":this.id,
      "name":this.name,
      "address":this.address,
      "phoneno":this.phoneno,
      "contactperson":this.contactperson,
      "regdate":this.regdate,
      "noofEmployee":this.noofemployee
    }
    this.AddresssService.UpdateCompany(entity).subscribe(data=>{
      Swal.fire('Updated Sucessfully')
      location.href="#/Company"
    })
  }
  

}
