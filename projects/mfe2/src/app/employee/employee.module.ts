import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';

import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    AddProjectComponent,
    AssignProjectComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
