import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent  implements OnInit {

Detail$: Observable<EmployeeModel>= this.employeesService.getOne('id')

  constructor(


    private employeesService: EmployeesService,
    private route: ActivatedRoute,
  ) { }

  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const employeeId = params.get('id');
      if (employeeId !== null) {
        this.Detail$ = this.employeesService.getOne(employeeId);
      }
    });
  }}