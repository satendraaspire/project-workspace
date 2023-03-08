import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  {
    path:'details',
    component: EmployeeDetailsComponent
  },
  {
    path:'add-project',
    component: AddProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
