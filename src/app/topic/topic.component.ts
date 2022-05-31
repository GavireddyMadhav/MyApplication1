import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  training:any
  tname:any
  tdescription:any 
  swal:any
  result:any

  constructor(public AddresssService: AddresssService) { }

  ngOnInit(): void {

    this.GetTraining()
  }


  GetTraining() {
    debugger
    this.AddresssService.GetTraining().subscribe(data => {
      debugger
      this.training = data;
    })
  }

  delete(id: any) {
    debugger
    this.AddresssService.DeleteTraining(id).subscribe(data => {
      debugger
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
      this.GetTraining()

    })
  }


  edit(id: any) {
     location.href = "#/Topicform/" + id
  }
}
