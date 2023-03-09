import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShellServiceService {
  url='http://localhost:3000/add-employee';

  constructor(
    private http:HttpClient
  ) { }
  getAllEmployeeData():Observable<any>{
    return this.http.get(this.url);
  }
}
