import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

describe('EmployeeDetailsComponent', () => {
  let homeComponent: HomeComponent;
  let spyHttpClient: jasmine.SpyObj<HttpClient>;
  let mockShellService
  beforeEach(async () => {
    let Store
    mockShellService = jasmine.createSpyObj(['getAllEmployeeData']);
   homeComponent = new HomeComponent(mockShellService,Store);
 
  });

  it('should be get home employee data ', () => {
    let mockData={
        "id": 1,
        "empId": 1000,
        "firstName": "Ram",
        "lastName": "Singh",
        "emailId": "ram@gmail.com",
        "mobileNum": 9998576432,
        "address": "Dehradun",
        "active": true
      }
  

    mockShellService.getAllEmployeeData.and.returnValue(of(mockData))
    homeComponent.getEmployeeData()
    homeComponent.employeeData;
    expect( homeComponent.employeeData).toBeTruthy(mockData);
  });

  it('should be get ng employye data ', () => {
    let mockData={
        "id": 1,
        "empId": 1000,
        "firstName": "Ram",
        "lastName": "Singh",
        "emailId": "ram@gmail.com",
        "mobileNum": 9998576432,
        "address": "Dehradun",
        "active": true
      }
  

    mockShellService.getAllEmployeeData.and.returnValue(of(mockData))
    console.warn("aaaa",homeComponent.ngOnInit())
    homeComponent.employeeData;
    expect( homeComponent.employeeData).toBeTruthy(mockData);
  });
});