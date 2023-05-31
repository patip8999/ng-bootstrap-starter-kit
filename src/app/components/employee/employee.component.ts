import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent {
  readonly employees$: Observable<EmployeeModel[]> = this._employeesService.getAll();
  @Input() title: string='Employees';
  constructor(private _employeesService: EmployeesService) {
  }
}
