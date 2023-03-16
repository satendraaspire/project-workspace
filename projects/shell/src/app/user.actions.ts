import { createAction, props, Action } from '@ngrx/store';
// import { type } from 'os';

export interface EmployeeUser
  {
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


export enum UserActionsTypes{
  loadUsers = '[User] Load Users',
  loadUsersSuccess = '[User] Load Users Success',
  loadUsersFailure =  '[User] Load Users Failure',

}

export class loadUsers implements Action{
  readonly type = UserActionsTypes.loadUsers;
}
export class loadUsersSuccess implements Action{
  readonly type = UserActionsTypes.loadUsersSuccess;
  constructor( public payload: { data: EmployeeUser[]}){}
}
export class loadUsersFailure implements Action{
  readonly type = UserActionsTypes.loadUsersFailure;
  constructor( public payload: { error: string}){}

}

// export const loadUsersSuccess = createAction(
//   '[User] Load Users Success',
//   props<{ data: EmployeeUser }>()
// );

// export const loadUsersFailure = createAction(
//   '[User] Load Users Failure',
//   props<{ error: string }>()
// );

export type UserActions = loadUsers | loadUsersSuccess | loadUsersFailure;