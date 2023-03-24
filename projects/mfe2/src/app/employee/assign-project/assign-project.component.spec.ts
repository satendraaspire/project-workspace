import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignProjectComponent } from './assign-project.component';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

describe('AssignProjectComponent', () => {
  let assginComponent: AssignProjectComponent;
  let employeeServiceService;
  let routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']); 

  beforeEach(async () => {
    employeeServiceService = jasmine.createSpyObj(['assginProject','getEmployee','getproject']);
    assginComponent = new AssignProjectComponent(employeeServiceService,routerSpy);

  });


  it('should f data', () => {
    let mockData=[{
      "employeeId": 12001,
      "projectId": 877,
      "id": 1
      },
  ]
  employeeServiceService.assginProject.and.returnValue(of(mockData));
  assginComponent.f;
   expect(assginComponent.f).toBeTruthy(mockData);
  });
  it('Should retun getassginData',()=>{
    let mockData=[{
      "id": 1,
      "employeeId": 12001,
      "projectId": 877,
    }]
    employeeServiceService.getEmployee.and.returnValue(of(mockData))
    assginComponent.getEmployee();
    expect(assginComponent.employeeId).toBeTruthy(mockData);
  });
  it('Should retun getProjectData',()=>{
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
    }]
    employeeServiceService.getproject.and.returnValue(of(mockData));
    assginComponent.getproject();
    expect(assginComponent.projectData).toBeTruthy(mockData);
  });


  it('should create new project data', () => {
    let mockData=[{
      "employeeId": 12001,
      "projectId": 877,
      "id": 1
      },
  ]
  assginComponent.onSubmit();
   expect(assginComponent.assignProject.value).toBeTruthy(mockData);
  });
  it('should create else add assgin project', () => {
    let mockData=[{
      "employeeId": 12001,
      "projectId": 877,
      "id": 1
      }]

  employeeServiceService.assginProject.and.returnValue(of(mockData));
  assginComponent.assignProject = new FormGroup({
    projectId: new FormControl('556'),
    employeeId: new FormControl('12002')
  })
  assginComponent.onSubmit()
  assginComponent.submitted=true;

  if (assginComponent.assignProject.invalid) {
    return;
  } else {
    assginComponent.assignProject.reset();
    assginComponent.submitted=false;
    routerSpy.navigateByUrl('/assgin-project')
    expect(assginComponent.assignProject.valid).toBeTruthy();
    
  }

    
  });

  it('should be ng data', () => {
   expect(assginComponent.ngOnInit()).toBeUndefined();
  });



});
