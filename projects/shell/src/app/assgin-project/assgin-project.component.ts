import { Component, OnInit } from '@angular/core';


import { Observable, Subject, from, of } from 'rxjs';
import { debounceTime, filter, toArray } from 'rxjs/operators'
import {ShellServiceService} from '../shell-service.service'

import{ Store,select } from '@ngrx/store'
import * as UserActions from '../user.actions'
import * as fromUser from '../user.selectors'
@Component({
  selector: 'app-assgin-project',
  templateUrl: './assgin-project.component.html',
  styleUrls: ['./assgin-project.component.css']
})

export class AssginProjectComponent implements OnInit {
  projectData: any;
  constructor(
    private store:Store,
    private ShellServiceService:ShellServiceService
  ) { }

  ngOnInit(): void {
    this.getemployeeData();

  }

  getemployeeData(){
    this.store.dispatch( new UserActions.loadUsers() );
    this.store.pipe(select(fromUser.getUsers)).subscribe(res=>{
      this.projectData=res
        console.log("DAta coming",res)
    })
  }
}
