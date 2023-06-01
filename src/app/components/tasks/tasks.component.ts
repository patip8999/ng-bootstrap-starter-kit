import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest, map, switchMap, of } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { TaskModel } from 'src/app/models/task.model';
import {
  TaskDataQuerymodel,
  mapTaskWithData,
} from 'src/app/querymodels/task-data.querymodel';
import { ChecklistItemsService } from 'src/app/services/check-list-item.service';
import { EmployeesService } from 'src/app/services/employees.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {

  readonly tasks$: Observable<TaskDataQuerymodel[]> = combineLatest([
    this._taskService.getAll(),
    this._employeesService.getAll(),
    this._chceckListItemsService.getAll()
  ]).pipe(
    map(([tasks, employees, checkListItems]) => tasks.map(t => mapTaskWithData(t, employees, checkListItems)))
  );




  constructor(
    private _taskService: TasksService,
    private _chceckListItemsService: ChecklistItemsService,
    private _employeesService: EmployeesService,
    private _ar: ActivatedRoute,
    private router: Router
  ) {}
}
