import { Component, OnInit } from '@angular/core';
import{ EmployeeServiceService} from '../../services/employee-service.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeData: any;
  projectData: any;

  constructor(
    private employeeServiceService:EmployeeServiceService
  ) { }

  ngOnInit(): void {
    this.getproject();

  }
  getproject(){
    this.employeeServiceService.getproject().subscribe(res=>{
      this.projectData = res;
      console.warn(this.projectData)
    })
  }  

}
