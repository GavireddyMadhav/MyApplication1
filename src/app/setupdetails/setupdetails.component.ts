import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setupdetails',
  templateUrl: './setupdetails.component.html',
  styleUrls: ['./setupdetails.component.css']
})
export class SetupdetailsComponent implements OnInit {
  set:any
  tname:any
  sdate:any
  cdate:any
  status:any

  constructor(public AddresssService: AddresssService, private activatedroute: ActivatedRoute) { }
  
  id: any;
  showButton: any

  ngOnInit(): void {

    this.activatedroute.params.subscribe(params => {
      this.id = params['id']

      if (this.id != undefined) {
        this.GetSetup();
        this.showButton = 1;
      }
      else {
        this.showButton = 0
      }

    })

  }


  

  GetSetup() {
    debugger
    this.AddresssService.GetSetup().subscribe(data => {
     
    })
  }

  public submit() {
    debugger
    var entity = {
      "tname":this.tname,
      "sdate":this.sdate,
      "cdate":this.cdate,
      "status":this.status
    }
    this.AddresssService.InsertSetup(entity).subscribe(data => {
      alert('submited');
      location.href = "#/Setup"
    })
  }




  public edit() {
    var entity = {

      
    }
    this.AddresssService.UpdateSetup(entity).subscribe(data => {
      alert('edit sucessfully');
      location.href = "#/Setup"
    })
  }

}
