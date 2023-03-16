import { Action, createReducer, on } from '@ngrx/store';
import { UserActions, UserActionsTypes } from './user.actions';

export interface EmployeeUser{
  "id": number,
  "empId": number,
  "firstName": string,
  "lastName": string,
  "emailId": string,
  "mobileNum": number,
  "address": string,
  "active": boolean,
  "employeeId":number,
  "projectId": number
}
export const userFeatureKey = 'usersState';



export interface State {
  users: EmployeeUser[],
  error: string

}

export const initialState: State = {
  users:[],
  error:''

};

export function reducer( state = initialState, action :UserActions): State {
 
  switch(action.type){

    case UserActionsTypes.loadUsers:
      return {
        ...state
      }

    case UserActionsTypes.loadUsersSuccess:
      return{
        ...state,
        users: action.payload.data,
        error:''
      }  
    case UserActionsTypes.loadUsersFailure:
      return{
        ...state,
        users:[],
        error: action.payload.error,

      }
      


    default:
      return state

  }

};
