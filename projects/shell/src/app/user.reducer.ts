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
  loading:boolean,
  loaded:boolean,
  error: string

}

export const initialState: State = {
  users:[],
  loading:false,
  loaded:false,
  error:''

};

export function reducer( state = initialState, action :UserActions): State {
 
  switch(action.type){

    case UserActionsTypes.loadUsers:
      return {
        ...state,
        loading:true
      }

    case UserActionsTypes.loadUsersSuccess:
      return{
        ...state,
        users: action.payload.data,
        loading:false,
        loaded:true,
        error:''
      }  
    case UserActionsTypes.loadUsersFailure:
      return{
        ...state,
        users:[],
        loaded:false,
        loading:false,
        error: action.payload.error,

      }
      


    default:
      return state

  }

};
