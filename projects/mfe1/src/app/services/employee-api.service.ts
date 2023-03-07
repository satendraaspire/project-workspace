import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService {
  url='http://localhost:3000/add-employee';


  constructor(
    private http: HttpClient
  ) { }
  addEmployee(res:any):Observable<any>{
    return this.http.post(this.url,res);
  }
  getEmployee():Observable<any>{
    return this.http.get(this.url);
  }
}
