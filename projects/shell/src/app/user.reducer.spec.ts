// import { reducer, initialState } from './user.reducer';

import * as fromPizzas from './user.reducer';
import * as fromActions from './user.actions';

describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the default state', () => {
 

      // const result = reducer(initialState, action);

      const { initialState } = fromPizzas;
      const action = {} as any;
      const state = fromPizzas.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });


  describe('initail action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromPizzas;
      const action = new fromActions.loadUsers();
      const state = fromPizzas.reducer(initialState, action);
  
      expect(state.loading).toEqual(true);
      // untouched props, good to add regardless
      expect(state.loaded).toEqual(false);
      expect(state.users).toEqual([]);
    });
  });


  describe('Reducer action', () => {
    it('should return the fail state', () => {
      const { initialState } = fromPizzas;
      const previousState = { ...initialState, loading: true };
      const action = new fromActions.loadUsersFailure({error:""});
      const state = fromPizzas.reducer(previousState, action);
  
      expect(state).toEqual(initialState);
    });
  });

  describe('SUCCESS action', () => {
    it('should populate success from the array', () => {
      let mockData:fromActions.EmployeeUser[]=[{
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
 
      const { initialState } = fromPizzas;
      const previousState = { ...initialState, loading: false };

      const action = new fromActions.loadUsersSuccess({data:mockData});
      const state = fromPizzas.reducer(initialState, action);
  
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });



});
