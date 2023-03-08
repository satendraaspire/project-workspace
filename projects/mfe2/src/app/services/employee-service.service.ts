import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url='http://localhost:3000/add-project';

  constructor(
    private http: HttpClient
  ) { }

  addProject(res):Observable<any>{
      return this.http.post(this.url,res);
  }
  getproject():Observable<any>{
    return this.http.get(this.url);
  }
}
