import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsSearchComponent } from './flights-search.component';
import { of } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

describe('AddProjectComponent', () => {
  let flightsComponent: FlightsSearchComponent;
  let fixture: ComponentFixture<FlightsSearchComponent>;
  let employeeServiceService;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']); 

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: Router, useValue: routerSpy }]
   }) 
    employeeServiceService = jasmine.createSpyObj(['addEmployee']);
    flightsComponent = new FlightsSearchComponent(employeeServiceService,routerSpy);
  });

  it('should show employee', () => {
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
  employeeServiceService.addEmployee.and.returnValue(of(mockData));
  flightsComponent.f;
  expect(flightsComponent.f).toBeTruthy(mockData);
  });


  it('should show ngOnInit', () => {

  flightsComponent.ngOnInit();
  console.log(flightsComponent.ngOnInit())
  expect(flightsComponent.ngOnInit()).toBeUndefined();
  });


  it('should create ad employee', () => {
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
  employeeServiceService.addEmployee.and.returnValue(of(mockData));

  flightsComponent.onSubmit()
     expect(flightsComponent.addEmpoyeeForm.value).toBeTruthy(mockData);
    
  });
  it('should create else employee', () => {
    let mockData=[{
        "empId": 1000,
        "firstName": "Ram",
        "lastName": "Singh",
        "emailId": "ram@gmail.com",
        "mobileNum": 9998576432,
        "address": "Dehradun",
        "active": true
      }]

  employeeServiceService.addEmployee.and.returnValue(of(mockData));
  flightsComponent.addEmpoyeeForm = new FormGroup({
    empId: new FormControl('10007'),
    firstName: new FormControl('Manu'),
    lastName: new FormControl('singh'),
    emailId: new FormControl('manu@gmail.com'),
    mobileNum: new FormControl('9870945234'),
    address: new FormControl('Doon'),
    active: new FormControl(true)
  })
  flightsComponent.onSubmit()
  flightsComponent.submitted=true;

  if (flightsComponent.addEmpoyeeForm.invalid) {
    return;
  } else {
    flightsComponent.addEmpoyeeForm.reset();
    flightsComponent.submitted=false;
    routerSpy.navigateByUrl('/')
    expect(flightsComponent.addEmpoyeeForm.valid).toBeTruthy();
    
  }

    
  });

});
