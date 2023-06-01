import { Pipe, PipeTransform } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';

@Pipe({
  name: 'taskProgress',
})
export class TaskProgressPipe implements PipeTransform {
  transform(task: TaskModel): string {
    return `${task.doneTaskCount}/${task.checkList.length}`;
  }
}