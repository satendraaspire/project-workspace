import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';
import{ EmployeeServiceService } from '../../services/employee-service.service'
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let employeeServiceService

  beforeEach(async () => {
    let store;
    employeeServiceService = jasmine.createSpyObj(['getproject','getAssginProject','addProject','assginProject']);
    component = new EmployeeDetailsComponent(employeeServiceService,store);

  });
  it('should be get project data ', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
      },
  ]
  employeeServiceService.getproject.and.returnValue(of(mockData));
  component.getproject();
   expect(component.projectData).toBeTruthy(mockData);
  });
  
  
  it('should return ng methods',()=>{
     expect(component.ngOnInit()).toBeUndefined()
  });
  
  it('should be get assgin project data ', () => {
    let mockData=[{
      "employeeId": 12001,
      "projectId": 877,
      "id": 1
      },
  ]
  employeeServiceService.getAssginProject.and.returnValue(of(mockData));
  component.gerAssginProject()
   expect(component.assginProjectDetails).toBeTruthy(mockData);
  });


  
});
