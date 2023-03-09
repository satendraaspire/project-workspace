import { Component, OnInit } from '@angular/core';

import{ ShellServiceService } from '../shell-service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeData: any;
  employeeInput: any='';

  constructor(
    private ShellServiceService:ShellServiceService
  ) { }

  ngOnInit() {
    this.getEmployeeData();
  }
  getEmployeeData(){
    this.ShellServiceService.getAllEmployeeData().subscribe(res=>{
      this.employeeData=res
    })
  }
 

}
