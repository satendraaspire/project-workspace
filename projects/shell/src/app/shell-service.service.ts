import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShellServiceService {
  url='http://localhost:3000/add-employee';
  url3='http://localhost:3000/add-project';
  url2='http://localhost:3000/assignProject';

  constructor(
    private http:HttpClient
  ) { 
    // this.getAllEmployeeDataNew();
    // this.getAllEmployeeDataNewOne();
  }
  getAllEmployeeData():Observable<any>{
    return this.http.get(this.url);
  }

getAssginProject():Observable<any>{
  return this.http.get(this.url2)
}
getproject():Observable<any>{
  return this.http.get(this.url3);
}
// getAllEmployeeDataNew(){
//  const one = this.http.get(this.url);
//  const two = this.http.get(this.url2);
//  forkJoin([one,two]).subscribe(res=>{
//   console.log("fork",res);
//  })



// getAllEmployeeDataNewOne(){
//   this.http.get(this.url).pipe(
//     mergeMap(res=> res+'sam')
//   ).subscribe(res=>{
//     console.warn("one",res)
//   })
//  }

}
