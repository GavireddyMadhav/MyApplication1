import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-topicform',
  templateUrl: './topicform.component.html',
  styleUrls: ['./topicform.component.css']
})
export class TopicformComponent implements OnInit {

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { } tname:any
  training:any
  tdescription:any 
  id: any;
  showButton: any



  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      this.id = params['id']

      if (this.id != undefined) {
        this.GetTraining();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })

  }

  GetTraining() {
    debugger
    this.AddresssService.GetTraining().subscribe(data => {
      debugger
      this.training = data.filter(x => x.id == this.id);
      let temp = data.filter(x => x.id == this.id);
      this.tname = temp[0].tname,
        this.tdescription = temp[0].tdescription 
    })
  }
  public submit(){
    var entity={
      "tname": this.tname,
      "tdescription":this.tdescription
    }
    this.AddresssService.InsertTraining(entity).subscribe(data=>{
      Swal.fire('Submited Sucessfully')
      location.href = "#/Topic"
    })
  }

  public edit(){
    var entity ={
      "id":this.id,
      "tname": this.tname,
      "tdescription":this.tdescription
    }
    this.AddresssService.UpdateTraining(entity).subscribe(data=>{
      alert('Updated sucessfully')
      location.href = "#/Topic"

    })
  }

}
