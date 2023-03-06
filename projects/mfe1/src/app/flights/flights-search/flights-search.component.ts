import { JsonPipe } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl,FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent implements OnInit {
  addEmpoyeeForm:FormGroup;
  submitted=false;

  constructor() {
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
  }
  get f() { 
    return this.addEmpoyeeForm.controls;
   }
  onSubmit(){
    this.submitted=true;
    if(this.addEmpoyeeForm.invalid){
      return;
    }
    console.log(this.addEmpoyeeForm);
  }

  search(): void {
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}
