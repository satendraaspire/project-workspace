import { TestBed } from '@angular/core/testing';

import { ShellServiceService } from './shell-service.service';
import { forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { concatAll, concatMap, toArray } from 'rxjs/operators';


describe('ShellServiceService', () => {
  let service: ShellServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
       // TODO: spy on other methods too
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ShellServiceService(httpClientSpy);
  });
  it('should be return url of shell ', () => {
    expect(service.url).toBeTruthy('http://localhost:3000/add-employee');
  });

  it('should be get employee data ', () => {
    let mockData=[{
        "id": 1,
        "empId": 1000,
        "firstName": "Ram",
        "lastName": "Singh",
        "emailId": "ram@gmail.com",
        "mobileNum": 9998576432,
        "address": "Dehradun",
        "active": true
      },

  ]
  let employeeDataRes;
  httpClientSpy.get.and.returnValue(of(mockData));
  service.getAllEmployeeData().subscribe(res=>{
    employeeDataRes=res;
    expect(employeeDataRes).toBeTruthy(mockData);
  })
  });

  it('should be get project data ', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      },

  ]
  let employeeDataRes;
  httpClientSpy.get.and.returnValue(of(mockData));
  service.getproject().subscribe(res=>{
    employeeDataRes=res;
    expect(employeeDataRes).toBeTruthy(mockData);
  })
  });
  it('should be get merge data ', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      },

  ]
  let employeeDataRes;
  httpClientSpy.get.and.returnValue(of(mockData));
  service.getNewData().pipe(
    concatMap(
      (res:any)=> res.map(
        log =>{
          const employeeData = service.http.get(`http://localhost:3000/add-employee?empId=${log.employeeId}`);
          const projectData = service.http.get(`http://localhost:3000/add-project?projectId=${log.projectId}`);
   
          return forkJoin([employeeData,projectData]);
        }

      )  
    ),concatAll(),toArray()
  
  ).subscribe(res=>{
    employeeDataRes=res;
    console.log(res)
    expect(employeeDataRes).toBeTruthy(mockData);
  })
  });


  
});