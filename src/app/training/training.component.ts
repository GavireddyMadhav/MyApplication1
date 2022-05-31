import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

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
    location.href = "/Login/" + id
  }



}
