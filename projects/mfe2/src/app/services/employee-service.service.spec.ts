import { TestBed } from '@angular/core/testing';

import { EmployeeServiceService } from './employee-service.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


describe('EmployeeServiceService', () => {
  let service: EmployeeServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
    service = new EmployeeServiceService(httpClientSpy);
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
  })

  expect(employeeDataRes).toBeTruthy(mockData);
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
  service.getEmployee().subscribe(res=>{
    employeeDataRes=res;
  })
  expect(employeeDataRes).toBeTruthy(mockData);
  });

  it('should be get assgin project data ', () => {
    let mockData=[{
      "employeeId": 12001,
      "projectId": 877,
      "id": 1
      },
  ]
  let employeeDataRes;
  httpClientSpy.get.and.returnValue(of(mockData));
  service.getAssginProject().subscribe(res=>{
    employeeDataRes=res;
  })
  expect(employeeDataRes).toBeTruthy(mockData);
  });

  it('should be post addproject data ', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      },
  ]
  let employeeDataRes;

  let resData={
    "projectId": 128,
    "projectName": "Floting",
    "projectDes": "For Navigation"
  }
  httpClientSpy.post.and.returnValue(of(mockData));
  service.addProject(resData).subscribe(res=>{
    employeeDataRes=res;
  })
  expect(employeeDataRes).toBeTruthy(mockData);
  });

  it('should be post assginProject data ', () => {
    let mockData=[{
      "id":1,
      "employeeId": 12001,
      "projectId": 877,
      },
  ]
  let employeeDataRes;

  let resData={
    "employeeId": 12003,
    "projectId": 990,
  }
  httpClientSpy.post.and.returnValue(of(mockData));
  service.assginProject(resData).subscribe(res=>{
    employeeDataRes=res;
  })
  expect(employeeDataRes).toBeTruthy(mockData);
  });

  
});
