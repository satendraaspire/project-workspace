import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url='http://localhost:3000/add-employee';

  constructor(
    private http: HttpClient
  ) { }

  addEmployee(res){
      return this.http.post(this.url,res)
  }
}
