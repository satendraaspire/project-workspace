import { Component, OnInit } from '@angular/core';
import{ EmployeeServiceService} from '../../services/employee-service.service'

import { Observable, Subject, from, of } from 'rxjs';
import { debounceTime, filter, toArray } from 'rxjs/operators'

import{ Store,select } from '@ngrx/store'
import * as UserActions from '../../../../../shell/src/app/user.actions'
import * as fromUser from '../../../../../shell/src/app/user.selectors'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeData: any;
  projectData: any;
  assginProjectDetails: Object;

  constructor(
    private employeeServiceService:EmployeeServiceService,
    private store:Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch( new UserActions.loadUsers() );
    this.store.pipe(select(fromUser.getUsers)).subscribe(res=>{
        console.log("DAta coming",res)
    });
    this.getproject();
    this.gerAssginProject();
  }
  getproject(){
    this.employeeServiceService.getproject().subscribe(res=>{
      this.projectData = res;
    })
  }  
  gerAssginProject(){
    this.employeeServiceService.getAssginProject().subscribe(res=>{
      this.assginProjectDetails=res
    })
  }

}
