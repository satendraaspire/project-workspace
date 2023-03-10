import { TestBed } from '@angular/core/testing';

import { EmployeeServiceService } from './employee-service.service';
import { of } from 'rxjs';

describe('EmployeeServiceService', () => {
  let service: EmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceService);
  });

  it('should be created', () => {
    let mockData=[{
      "id": 1,
      "projectId": 121,
      "projectName": "FinTech",
      "projectDes": "For E-com"
    },
    ]
    let employeeDataRes;
    spyOn(service , 'getproject').and.returnValue(of(mockData));
    service.getproject().subscribe(res=>{
      employeeDataRes = res
    })

      expect(employeeDataRes).toBeTruthy(mockData);
      });
});
