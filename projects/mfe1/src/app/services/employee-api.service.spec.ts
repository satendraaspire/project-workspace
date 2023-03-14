import { TestBed } from '@angular/core/testing';

import { EmployeeAPIService } from './employee-api.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('EmployeeAPIService', () => {
  let service: EmployeeAPIService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
    service = new EmployeeAPIService(httpClientSpy);
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

  it('should be post addemployee data ', () => {
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
  let resData={
 
    "empId": 1055,
    "firstName": "Ranu",
    "lastName": "Singh",
    "emailId": "ranu@gmail.com",
    "mobileNum": 9999076432,
    "address": "Dehradun",
    "active": true
  }

  let employeeDataRes;
  httpClientSpy.post.and.returnValue(of(mockData));
  service.addEmployee(resData).subscribe(res=>{
    employeeDataRes=res;
  })
  expect(employeeDataRes).toBeTruthy(mockData);
  });
});
