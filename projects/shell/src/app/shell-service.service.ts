import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Observable, forkJoin, from, of } from 'rxjs';
import { concatAll, concatMap, map, mergeMap, tap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShellServiceService {
  url='http://localhost:3000/add-employee';
  url3='http://localhost:3000/add-project';
  url2='http://localhost:3000/assignProject';
  empId: any;
  projectId: any;
  lukeData$: Observable<any>;
  employeeProjectRes: any[]=[];

  constructor(
    public http:HttpClient
  ) { 
  }
  getAllEmployeeData():Observable<any>{
    return this.http.get(this.url);
  }
  getNewData():Observable<any>{
   return  this.http.get(this.url2).pipe(
      concatMap(
        (res:any)=> res.map(
          log =>{
            const employeeData = this.http.get(`http://localhost:3000/add-employee?empId=${log.employeeId}`);
            const projectData = this.http.get(`http://localhost:3000/add-project?projectId=${log.projectId}`);
     
            return forkJoin([employeeData,projectData]);
          }

        )  
      ),concatAll(),toArray()
    )
  }

// getAssginProject(){
//   const assignProject= from([
//     {
//       "employeeId": 12001,
//       "projectId": 877,
//       "id": 1
//     },
//     {
//       "projectId": "103",
//       "employeeId": "556",
//       "id": 2
//     },
//     {
//       "projectId": "776",
//       "employeeId": "2345",
//       "id": 3
//     },
//     {
//       "projectId": "877",
//       "employeeId": "776",
//       "id": 4
//     },
//     {
//       "projectId": "887",
//       "employeeId": "1234",
//       "id": 5
//     }
//   ])

//   assignProject.pipe(
//     mergeMap( res =>{
//        this.empId = res.employeeId;
//       //  console.log("emplId",this.empId);
       
//        this.projectId = res.projectId;
//       //  console.log("projectId",this.projectId);

//        const employeeData = this.http.get(`http://localhost:3000/add-employee?empId=${res.employeeId}`);
//        const projectData = this.http.get(`http://localhost:3000/add-project?projectId=${res.projectId}`);

//        return forkJoin([employeeData,projectData]);
       
  
//     }),toArray())
//   .subscribe(user =>{
//     console.warn("oldcode",user)
//     return  this.employeeProjectRes = user;
//   })
// }
getproject():Observable<any>{
  return this.http.get(this.url3);
}


}
