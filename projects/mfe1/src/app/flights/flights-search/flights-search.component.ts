import { JsonPipe } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl,FormControlName, Validators } from '@angular/forms';
import { EmployeeAPIService } from '../../services/employee-api.service';

import {Router} from '@angular/router'


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
    private router:Router
  ) {
    this.addEmpoyeeForm = new FormGroup({
      empId: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      mobileNum: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      address: new FormControl(''),
      active: new FormControl(false,Validators.requiredTrue)
    })
   }

  ngOnInit(): void {
  }
  get f() { 
    return this.addEmpoyeeForm.controls;
   }
  onSubmit(){
    this.submitted=true;
    if(this.addEmpoyeeForm.invalid){
      alert("Invalid Submit")
      return;
    }
    else{
      this.service.addEmployee(this.addEmpoyeeForm.value).subscribe(res=>{
        this.addEmpoyeeForm.reset();
        this.submitted=false;
        this.router.navigateByUrl('/');
    });


    }

  }

}
