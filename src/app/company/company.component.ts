import { Component, OnInit } from '@angular/core';
import { AddresssService } from '../addresss.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  company: any
  name: any
  address: any
  phoneno: any
  contacctperson: any
  regdate: any
  noofemployee: any
  search: any;

  constructor(public AddresssService: AddresssService) { }


  ngOnInit(): void {
    this.GetCompany()
  }

  GetCompany() {
    debugger
    this.AddresssService.GetCompany().subscribe(data => {
      this.company = data;
    })
  }
  delete(id: any) {
    this.AddresssService.DeleteCompany(id).subscribe(data => {
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
      this.GetCompany()
    })
  }
  edit(id: any) {
    location.href = "#/Companyform/" + id
  }



}
