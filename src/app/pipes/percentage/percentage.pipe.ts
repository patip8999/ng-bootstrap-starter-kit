import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentage' })
export class PercentagePipe implements PipeTransform {
  transform(checklist: any[]): number {
    const completedItems = checklist.filter(item => item.isDone);
    return Math.ceil((completedItems.length / checklist.length) * 100);
  }
}