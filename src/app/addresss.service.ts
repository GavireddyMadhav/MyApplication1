import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddresssService {



  
  host ='http://localhost:4199/'

  constructor( private http:HttpClient) { }

   public GetAddress(){
     debugger
    return this.http.get<any[]>(this.host +"Master/GetAddress")
   }

   public InsertAddress(json:any){
     return this.http.post(this.host +"Master/InsertAddress",json)
   }

   public UpdateAddress(id:any){
     return this.http.post(this.host+"Master/UpdateAddress",id)
   }

   public DeleteAddress(id:any){
    return this.http.get<any[]>(this.host+"Master/DeleteAddress?ID="+id)
  }






  host1 ='http://localhost:4199/'

  public GetTraining(){
    debugger
   return this.http.get<any[]>(this.host1 +"Master/GetTraining")
  }

  public InsertTraining(json:any){
    return this.http.post(this.host1 +"Master/InsertTraining",json)
  }

  public UpdateTraining(data:any){
    return this.http.post(this.host1+"Master/UpdateTraining",data)
  }

  public DeleteTraining(id:any){
   return this.http.get<any[]>(this.host1+"Master/DeleteTraining?ID="+id)
 }






 host2='http://localhost:4199/'

 public GetHolidays(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetHolidays")
}

public InsertHolidays(json:any){
  return this.http.post(this.host1 +"Master/InsertHolidays",json)
}

public UpdateHolidays(data:any){
  return this.http.post(this.host1+"Master/UpdateHolidays",data)
}

public DeleteHolidays(id:any){
 return this.http.get<any[]>(this.host1+"Master/DeleteHolidays?ID="+id)
}





host3 ='http://localhost:4199/'

public GetStaff(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetStaff")
}

public InsertStaff(json:any){
  return this.http.post(this.host1 +"Master/InsertStaff",json)
}

public UpdateStaff(data:any){
  return this.http.post(this.host1+"Master/UpdateStaff",data)
}

public DeleteStaff(id:any){
 return this.http.get<any[]>(this.host1+"Master/DeleteStaff?ID="+id)
}


host4='http://localhost:4199'

public GetCompany(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetCompany")
}

public InsertCompany(json:any){
  return this.http.post(this.host1 +"Master/InsertCompany",json)
}

public UpdateCompany(data:any){
  return this.http.post(this.host1+"Master/UpdateCompany",data)
}

public DeleteCompany(id:any){
 return this.http.get<any[]>(this.host1+"Master/DeleteCompany?ID="+id)
}


host5='http://localhost:4199/'

public GetSetup(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetSetup")
}

public InsertSetup(json:any){
  return this.http.post(this.host1 +"Master/InsertSetup",json)
}

public UpdateSetup(data:any){
  return this.http.post(this.host1+"Master/UpdateSetup",data)
}

public DeleteSetup(id:any){
 return this.http.get<any[]>(this.host1+"Master/DeleteSetup?ID="+id)
}


public GetCountry(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetCountry")
}


public GetProvince(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetProvince")
}

public GetAddressType(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetAddressType")
}


public GetDistrict(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetDistrict")
}


public GetHolidaysCount(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetHolidaysCount")
}

public GetStaffCounts(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetStaffCounts")
}


public GetCompanyCounts(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetCompanyCounts")
}


public GetSetupCount(){
  debugger
 return this.http.get<any[]>(this.host1 +"Master/GetSetupCount")
}



}


