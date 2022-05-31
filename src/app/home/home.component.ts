import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public AddresssService: AddresssService) { }
  holidays:any
  name:any
  description:any
  date:any
  location:any
  attachment:any


  ngOnInit(): void {
    this.GetHolidays()
  }

  GetHolidays(){
    this.AddresssService.GetHolidays().subscribe(data=>{
      this.holidays=data;
    })
  }

}
