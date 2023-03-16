import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeFilter'
})
export class EmployeFilterPipe implements PipeTransform {

  transform(value: any[], filterinput: any): any[]  {
    if(filterinput)
    {
      return value.filter(res => 
       res.active === filterinput
      );
    }
    else 
    {
      return value;
    }
  }

}
