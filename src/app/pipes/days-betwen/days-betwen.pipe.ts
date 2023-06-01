import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysBetween'
})
export class DaysBetweenPipe implements PipeTransform {
  transform(startDate: Date, dueDate: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; 
    const start = new Date(startDate);
    const due = new Date(dueDate);
    const diffDays = Math.round(Math.abs((due.getTime() - start.getTime()) / oneDay));
    return diffDays;
  }
}