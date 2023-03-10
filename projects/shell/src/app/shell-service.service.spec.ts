import { TestBed } from '@angular/core/testing';

import { ShellServiceService } from './shell-service.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


describe('ShellServiceService', () => {
  let service: ShellServiceService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
       // TODO: spy on other methods too
    
    service = new ShellServiceService(httpClientSpy);
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
  })


    expect(employeeDataRes).toBeTruthy(mockData);
  });
});