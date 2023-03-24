import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;
  let spyHttpClient: jasmine.SpyObj<HttpClient>;
  let mockShellService
  beforeEach(async () => {
    let Store
    mockShellService = jasmine.createSpyObj(['getAllEmployeeData']);
   homeComponent = new HomeComponent(mockShellService);
 
  });
  it('should return ng methods',()=>{
    expect(homeComponent.ngOnInit()).toBeUndefined()
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
    
  it('should return get',()=>{
    homeComponent._employeeInput = "Ram"
    expect(homeComponent.employeeInput).toBe("Ram")
 });


 it('should return set',()=>{  
  let val = "Ram";  
  homeComponent._employeeInput = homeComponent.employeeInput;
  expect(homeComponent._employeeInput).toBeTruthy("Ram")
  });


  it('should return filter input Data',()=>{
    let mockData=[{
      "id": 1,
      "empId": 1000,
      "firstName": "Ram",
      "lastName": "Singh",
      "emailId": "ram@gmail.com",
      "mobileNum": 9998576432,
      "address": "Dehradun",
      "active": true
    }]

   homeComponent.filterInputData();
   homeComponent._employeeInputValue=true;
    homeComponent._employeeInput == false
   if(!homeComponent._employeeInputValue && homeComponent._employeeInput == false){
    return homeComponent.employeeDataList;
   }
    expect(homeComponent.employeeDataList).toBeTruthy(mockData);
  });
  it('should return filter input else one Data',()=>{
    let mockData=[{
      "id": 1,
      "empId": 1000,
      "firstName": "Ram",
      "lastName": "Singh",
      "emailId": "ram@gmail.com",
      "mobileNum": 9998576432,
      "address": "Dehradun",
      "active": true
    }]

   
   homeComponent._employeeInputValue = "Sam";
   homeComponent._employeeInput = true
   homeComponent.filterInputData();
   if(!homeComponent._employeeInputValue && homeComponent._employeeInput == false){
    return homeComponent.employeeDataList;
   }
   else if(homeComponent._employeeInput == true){
    return homeComponent.employeeDataList.filter(res => {
      if (homeComponent._employeeInputValue == "Sam") {


        return ((res.firstName.toLocaleLowerCase() === homeComponent._employeeInputValue.toLocaleLowerCase()) && (res.active === true) )
      } else {
 
        return res.active === true;
      }
    }
   
     );
  }

     expect(homeComponent.employeeDataList).toBeTruthy(mockData);
    
  });



  it('should return filter input else one inside Data',()=>{
    let mockData=[{
      "id": 1,
      "empId": 1000,
      "firstName": "Ram",
      "lastName": "Singh",
      "emailId": "ram@gmail.com",
      "mobileNum": 9998576432,
      "address": "Dehradun",
      "active": true
    }]

   
   homeComponent._employeeInputValue = false;
   homeComponent._employeeInput = true
   homeComponent.filterInputData();
   if(!homeComponent._employeeInputValue && homeComponent._employeeInput == false){
    return homeComponent.employeeDataList;
   }
   else if(homeComponent._employeeInput == true){
    return homeComponent.employeeDataList.filter(res => {
      if (homeComponent._employeeInputValue == true) {
        return ((res.firstName.toLocaleLowerCase() === homeComponent._employeeInputValue.toLocaleLowerCase()) && (res.active === true) )
      } else {
        return res.active === true;
      }
    }
   
     );
  }

     expect(homeComponent.employeeDataList).toBeTruthy(mockData);
    
  });




  it('should return filter input else two Data',()=>{
    let mockData=[{
      "id": 1,
      "empId": 1000,
      "firstName": "Ram",
      "lastName": "Singh",
      "emailId": "ram@gmail.com",
      "mobileNum": 9998576432,
      "address": "Dehradun",
      "active": true
    }]

   
   homeComponent._employeeInputValue= "Sam";
   homeComponent._employeeInput = false
   homeComponent.filterInputData();
   if(!homeComponent._employeeInputValue && homeComponent._employeeInput == false){
    return homeComponent.employeeDataList;
   }
   else if(homeComponent._employeeInput == "Ram"){
    return homeComponent.employeeDataList.filter(res => {
      if (homeComponent._employeeInputValue == "Sam") {
        return ((res.firstName.toLocaleLowerCase() === homeComponent._employeeInputValue.toLocaleLowerCase()) && (res.active === true) )
      } else {
        return res.active === true;
      }
    }
   
     );
  }

  else if(homeComponent._employeeInput == false) {
    return homeComponent.employeeDataList.filter(res => 
      res.firstName.toLocaleLowerCase() === homeComponent._employeeInputValue.toLocaleLowerCase(),
     );
  } 

     expect(homeComponent.employeeDataList).toBeTruthy(mockData);
    
  });

   
it('should return get-2',()=>{
  homeComponent._employeeInputValue = "Ram"
  expect(homeComponent.employeeInputValue).toBe("Ram")
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
    homeComponent.getEmployeeData()
    homeComponent.employeeData;
    expect( homeComponent.employeeData).toBeTruthy(mockData);
  });
});