import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, ReplaySubject } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';


import { UserEffects } from './user.effects';
import * as MyActions from './user.actions';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';

describe('UserEffects', () => {
  let actions$: Observable<any>;
  let effects: UserEffects;
  let actions: ReplaySubject<any>;
  let spyHttpClient: jasmine.SpyObj<HttpClient>;
  let mockShellService
  let effect
  let action

  beforeEach(() => {
    mockShellService = jasmine.createSpyObj(['getNewData']);
    effect = new UserEffects(mockShellService,action);
  });

  it('should be return effects', () => {
    let mockData:MyActions.EmployeeUser[]=[{
      "id": 1,
      "empId": 1000,
      "firstName": "Ram",
      "lastName": "Singh",
      "emailId": "ram@gmail.com",
      "mobileNum": 9998576432,
      "address": "Dehradun",
      "active": true,
      "employeeId":1000,
      "projectId": 123
    }]
    actions = new ReplaySubject(1);
    actions.next(new MyActions.loadUsers);
 
    effects.loadUsers$.pipe(
      ofType(MyActions.UserActionsTypes.loadUsers),
      mergeMap(
          action => mockShellService.getNewData().pipe(
            map(
              
              res=> ( new MyActions.loadUsersSuccess({ data: mockData}))
            )
          )        
     
      )
    )
    .subscribe(result => {
      return expect(result).toEqual(new MyActions.loadUsersSuccess({data:mockData}));
    });
   

  });
});
