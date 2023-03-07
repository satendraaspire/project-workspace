import { JsonPipe } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl,FormControlName, Validators } from '@angular/forms';
import { EmployeeAPIService } from '../../services/employee-api.service';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent implements OnInit {
  addEmpoyeeForm:FormGroup;
  submitted=false;

  constructor(
    private service:EmployeeAPIService,
  ) {
    this.addEmpoyeeForm = new FormGroup({
      empId: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required]),
      emilId: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      mobileNum: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl('')
    })
   }

  ngOnInit(): void {
   this.getEmployee();
  }
  get f() { 
    return this.addEmpoyeeForm.controls;
   }
   getEmployee(){
    this.service.getEmployee().subscribe(res=>{
      console.warn("getDAta",res);
    })
   }
  onSubmit(){
    this.submitted=true;
    if(this.addEmpoyeeForm.invalid){
      // this.toastr.error("Somthing Went Wrong");
      return;
    }
    else{
      // this.toastr.success("New Employee Added Successfully");
      this.service.addEmployee(this.addEmpoyeeForm.value).subscribe(res=>{
        console.warn(res);
    });

    console.log(this.addEmpoyeeForm);

    }

  }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}
