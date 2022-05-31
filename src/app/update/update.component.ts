import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  addresstype: any;
  addressline1: any;
  addressline2: any;
  addressline3: any;
  addressline4: any
  country: any;
  province: any;
  barangy: any;
  postcode: any;
  contactnumber: any;
  contactRelationship: any;
  mobilenumber: any;
  officeNumber: any;
  landlineNumber: any;
  emailId: any;
  address: any;
  id: any
  search:any;


  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void {

    this.GetAddress()
   

  }

  


  GetAddress() {
    debugger
    this.AddresssService.GetAddress().subscribe(data => {
      debugger
      this.address = data;
    })
  }

  delete(id: any) {
    this.AddresssService.DeleteAddress(id).subscribe(data => {
      alert('Deleted');
      this.GetAddress()

    })
  }


  edit(id: any) {
    location.href = "#/Login/" + id
  }
}
