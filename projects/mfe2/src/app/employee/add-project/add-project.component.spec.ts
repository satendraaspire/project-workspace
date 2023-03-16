import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from './add-project.component';
import { of } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;
  let employeeServiceService;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']); 

  beforeEach(async () => {
    employeeServiceService = jasmine.createSpyObj(['addProject']);
    component = new AddProjectComponent(employeeServiceService,routerSpy);
  });

  it('should return f data', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      },
  ]
  employeeServiceService.addProject.and.returnValue(of(mockData));
   expect(component.f).toBeTruthy(mockData);
  });

  it('should create add project', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      },
  ]
  employeeServiceService.addProject.and.returnValue(of(mockData));
  component.onSubmit()
   expect(component.addProject.value).toBeTruthy(mockData);
  });

  it('should create else add project', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      }]

  employeeServiceService.addProject.and.returnValue(of(mockData));
  component.addProject = new FormGroup({
    projectId: new FormControl('1'),
    projectName: new FormControl('Koko'),
    projectDes: new FormControl('Using for Bank'),
  })
  component.onSubmit()
  component.submitted=true;

  if (component.addProject.invalid) {
    return;
  } else {
    component.addProject.reset();
    component.submitted=false;
    routerSpy.navigateByUrl('/employee-data/details')
    expect(component.addProject.valid).toBeTruthy();
    
  }

    
  });

  it('should create ng method', () => {
   expect(component.ngOnInit()).toBeUndefined();
  });

});
