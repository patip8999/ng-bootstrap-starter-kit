import { Pipe, PipeTransform } from '@angular/core';
import { ChecklistItemModel } from 'src/app/models/check-list-item.model';


@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {
  transform(taskChecklist: ChecklistItemModel[]): number {
    return Math.ceil(taskChecklist.filter(t => t.isDone).length / taskChecklist.length * 100);
  }
}