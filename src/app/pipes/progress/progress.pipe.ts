import { Pipe, PipeTransform } from '@angular/core';
import { TaskDataQuerymodel } from 'src/app/querymodels/task-data.querymodel';

@Pipe({ name: 'progress' })
export class ProgressPipe implements PipeTransform {
  transform(task: TaskDataQuerymodel): string {
    const numVal = (task.doneTaskCount / task.checklist.length) * 100;
    if (numVal < 50) {
      return 'bg-danger';
    }
    if (numVal < 75) {
      return 'bg-warning';
    }
    return 'bg-success';
  }
}