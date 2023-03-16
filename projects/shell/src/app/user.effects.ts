import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, observable,of } from 'rxjs'
import { Action} from '@ngrx/store'
import * as UserActions from './user.actions'
import { mergeMap,map,catchError }from 'rxjs/operators'
import { EmployeeServiceService } from '../../../mfe2/src/app/services/employee-service.service'

 

@Injectable()
export class UserEffects {


  constructor(
    private actions$: Actions,
    private shellservice:EmployeeServiceService
    ) {}

 
  loadUsers$ = createEffect(()=>
  this.actions$.pipe(
    ofType(UserActions.UserActionsTypes.loadUsers),
    mergeMap(
      action => this.shellservice.getAssginProject().pipe(
        map(
          res => ( new UserActions.loadUsersSuccess({data:res}) )
        )
      )
    )
  )
  ) 


}

