import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-holidayform',
  templateUrl: './holidayform.component.html',
  styleUrls: ['./holidayform.component.css']
})
export class HolidayformComponent implements OnInit {
  holidays: any
  id: any
  data: any
  name: any
  description: any
  date: any
  location: any
  attachment: any
  showButton: any
  event:any



  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.activatedroute.params.subscribe(params => {
      this.id = params['id']

      if (this.id != undefined) {
        this.GetHolidays();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })

  }

  GetHolidays()
   {
    this.AddresssService.GetHolidays().subscribe(data => {
      this.holidays = data.filter(x => x.id == this.id)
      let temp = data.filter(x => x.id == this.id)
      this.name = temp[0].name
      this.description = temp[0].description
      this.date = temp[0].date
      this.location = temp[0].location
      this.attachment = temp[0].attachment
    })
  }


  public submit() {
    debugger
    var entity = {
      "name": this.name,
      "description": this.description,
      "date": this.date,
      "location": this.location,
      "attachment": this.attachment
    }
    this.AddresssService.InsertHolidays(entity).subscribe(data => {
      alert('submited')
      location.href = "#/Holidays"
    })
  }



  public edit() {
    debugger
    var entity = {
      "id": this.id,
      "name": this.name,
      "description": this.description,
      "date": this.date,
      "location": this.location,
      "attachment": ''
    }
    this.AddresssService.UpdateHolidays(entity).subscribe(data => {
      Swal.fire('Submited Sucessfully')
      location.href = "#/Holidays"

    })
  }



  
  files: File[] = [];

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
    
  }
  
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


}
