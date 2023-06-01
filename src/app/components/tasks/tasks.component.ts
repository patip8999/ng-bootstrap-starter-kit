import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from 'src/app/models/task.model';
import { ChecklistItemsService } from 'src/app/services/check-list-item.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {

readonly TaskList$: Observable<TaskModel[]>=this._taskService.getAll()

  constructor (private _taskService: TasksService, private _chceckListItemsService: ChecklistItemsService) {}
}
