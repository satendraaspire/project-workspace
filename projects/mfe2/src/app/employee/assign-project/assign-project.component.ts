import { Component, OnInit } from '@angular/core';

import { FormControl,FormControlName,FormGroup, Validators} from '@angular/forms'
import { EmployeeServiceService} from '../../services/employee-service.service'

import { Router } from '@angular/router'

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent implements OnInit {
  assignProject: FormGroup;
  submitted=false
  employeeId: any;
  projectId: any;

  constructor(
    private EmployeeServiceService:EmployeeServiceService,
    private router:Router
  ) {
    this.assignProject= new FormGroup({
      projectId: new FormControl('',Validators.required),
      employeeId: new FormControl('',Validators.required)
    })
   }

  ngOnInit(): void {
    this.getEmployee();
    this.getProject();

  }
  onSubmit(){
    this.submitted=true;
    if(this.assignProject.invalid){
      return;
    }else{
      this.EmployeeServiceService.assginProject(this.assignProject.value).subscribe(res=>{
        this.assignProject.reset();
        this.submitted=false;
        this.router.navigateByUrl('/employee-data/details')
        console.warn(res);
      })
    }
   console.warn(this.assignProject.value)
  }
  getEmployee(){
    this.EmployeeServiceService.getEmployee().subscribe(res=>{
      this.employeeId=res;
    })
  };
  getProject(){
    this.EmployeeServiceService.getproject().subscribe(res=>{
      this.projectId=res;
    })
  };

  get f(){
    return this.assignProject.controls;
  }

}
