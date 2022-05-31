import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  holidays:any
  name:any
  description:any
  date:any
  location:any
  attachment:any

  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void {
    this.GetHolidays()
  }

  GetHolidays(){
    this.AddresssService.GetHolidays().subscribe(data=>{
      this.holidays=data;
    })
  }

  delete(id:any){
    this.AddresssService.DeleteHolidays(id).subscribe(data=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
      this.GetHolidays()
    })
  }
  edit(id:any){
    location.href= "#/Holidayform/" + id
  }

}
