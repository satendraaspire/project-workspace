import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,FormControlName, Validators } from '@angular/forms'
import{ EmployeeServiceService} from '../../services/employee-service.service'


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  addProject: FormGroup;
  submitted=false;

  constructor(
    private EmployeeServiceService:EmployeeServiceService
  ) {
      this.addProject = new FormGroup({
        projectId: new FormControl('',Validators.required),
        projectName: new FormControl('',Validators.required),
        projectDes: new FormControl('',Validators.required),

      })
   }


  ngOnInit(): void {
  }
  get f() { 
    return this.addProject.controls;
  }
  onSubmit(){
    this.submitted=true;
    if (this.addProject.invalid) {
      return;
    } else {

      this.EmployeeServiceService.addProject(this.addProject.value).subscribe(res=>{
        this.addProject.reset();
        this.submitted=false;
        console.warn(res);
      })
    }


  }



}
