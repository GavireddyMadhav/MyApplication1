import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {
  set:any
  tname:any
  sdate:any
  cdate:any
  status:any
  search:any;
  
  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void {
    this.GetSetup()
  }
  
  GetSetup(){
    this.AddresssService.GetSetup().subscribe(data=>{
      this.set=data;
    })
  }
  


  
}
