import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url='http://localhost:3000/add-project';
  url1='http://localhost:3000/add-employee';
  url2='http://localhost:3000/assignProject'

  constructor(
    private http: HttpClient
  ) { }

  addProject(res):Observable<any>{
      return this.http.post(this.url,res);
  }
  assginProject(res):Observable<any>{
    return this.http.post(this.url2,res)
  }
  getAssginProject():Observable<any>{
    return this.http.get(this.url2);
  }
  getproject():Observable<any>{
    return this.http.get(this.url);
  }
  getEmployee():Observable<any>{
    return this.http.get(this.url1);
  }
}
