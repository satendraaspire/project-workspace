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
  assginProjectDetails: Object;

  constructor(
    private employeeServiceService:EmployeeServiceService,
  ) { }

  ngOnInit(): void {
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
