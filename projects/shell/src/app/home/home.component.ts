import { Component, OnInit } from '@angular/core';

import{ ShellServiceService } from '../shell-service.service'
import { Observable, Subject, from, of } from 'rxjs';
import { debounceTime, filter, toArray } from 'rxjs/operators'

import{ Store,select } from '@ngrx/store'
import * as UserActions from '../user.actions'
import * as fromUser from '../user.selectors'




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _employeeInput: any='';
  userQuestionUpdate = new Subject<string>();
  _employeeInputValue:any;
  logic: unknown;
  employeeData: any;
  employeeDataList= [
    {
      "id": 1,
      "empId": 1000,
      "firstName": "Ram",
      "lastName": "Singh",
      "emailId": "ram@gmail.com",
      "mobileNum": 9998576432,
      "address": "Dehradun",
      "active": true
    },
    {
      "empId": "12300",
      "firstName": "Rohan",
      "lastName": "Singh",
      "emailId": "rohan@gmail.com",
      "mobileNum": "9785347234",
      "address": "Doon",
      "id": 2,
      "active": false
    },
    {
      "empId": "12001",
      "firstName": "Sam",
      "lastName": "Roy",
      "emailId": "sam@gmail.com",
      "mobileNum": "9753753864",
      "address": "Doon",
      "active": true,
      "id": 3
    },
    {
      "empId": "556",
      "firstName": "Deepak",
      "lastName": "Roy",
      "emailId": "deepak@gmail.com",
      "mobileNum": "8764692349",
      "address": "Doon",
      "active": false,
      "id": 4
    },
    {
      "empId": "776",
      "firstName": "Jay",
      "lastName": "Singh",
      "emailId": "jay@gmail.com",
      "mobileNum": "9874790786",
      "address": "Delhi",
      "active": true,
      "id": 5
    },
    {
      "empId": "2345",
      "firstName": "satendra",
      "lastName": "Singh",
      "emailId": "satendra@gmail.com",
      "mobileNum": "9997658876",
      "address": "Doon",
      "active": true,
      "id": 6
    },
    {
      "empId": "909",
      "firstName": "Manoj",
      "lastName": "singh",
      "emailId": "manoj@gmail.com",
      "mobileNum": "9987509843",
      "address": "Doon",
      "active": true,
      "id": 7
    },
    {
      "empId": "1234",
      "firstName": "Mani",
      "lastName": "Singh",
      "emailId": "mani@gmail.com",
      "mobileNum": "9898790909",
      "address": "Pune",
      "active": true,
      "id": 8
    },
    {
      "empId": "10001",
      "firstName": "Meena",
      "lastName": "Roy",
      "emailId": "meena@gmail.com",
      "mobileNum": "9897953589",
      "address": "Goa",
      "active": true,
      "id": 9
    },
    {
      "id": 10,
      "empId": 10001,
      "firstName": "Ram",
      "lastName": "rawat",
      "emailId": "rawat@gmail.com",
      "mobileNum": 9798986432,
      "address": "delhi",
      "active": false
    },
  ]
  addEmp: any[];


  constructor(
    private ShellServiceService:ShellServiceService,
    private store:Store
  ) { }

  ngOnInit() {
    this.store.dispatch( new UserActions.loadUsers() );
    this.store.pipe(select(fromUser.getUsers)).subscribe(res=>{
        console.log("DAta coming",res)
    });
    this.getEmployeeData();
    this.addEmp = this.employeeDataList;
 
  }
  get employeeInput(){
    console.log("get")
    return this._employeeInput;
  }
  set employeeInput(value){
    console.log("set");
      this._employeeInput=value;
     this.addEmp= this.filterInputData(value)
  }

  get employeeInputValue(){
    console.log("get")
    return this._employeeInputValue;
  }
  set employeeInputValue(value){
    console.log("set");
      this._employeeInputValue=value;
     this.addEmp= this.filterInputData(value)
  }

  filterData(event){
    console.log(event)
  }
  getEmployeeData(){
    this.ShellServiceService.getAllEmployeeData().pipe(
      filter(res => res.firstName == "Ram")
    ).subscribe(res=>{
      this.employeeData=res;
      console.log(this.employeeData)
    })
  }
  filterInputData(filterVal){
     if(!this._employeeInputValue && this._employeeInput == false) {
      return this.employeeDataList;
    }
    else if(this._employeeInput == true){
      return this.employeeDataList.filter(res => {
        if (this._employeeInputValue) {
          return ((res.firstName.toLocaleLowerCase() === this._employeeInputValue.toLocaleLowerCase()) && (res.active === true) )
        } else {
          return res.active === true;
        }
      }
     
       );
    }
    else if(this._employeeInput == false) {
      return this.employeeDataList.filter(res => 
        res.firstName.toLocaleLowerCase() === this._employeeInputValue.toLocaleLowerCase(),
       );
    } 
   
  }

 

}
