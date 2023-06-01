import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysBetween'
})
export class DaysBetweenPipe implements PipeTransform {
  transform(startDate: Date | string, dueDate: Date | string): number {
    const oneDay = 24 * 60 * 60 * 1000; // Liczba milisekund w jednym dniu

    const start = new Date(startDate);
    const due = new Date(dueDate);

    const diffDays = Math.round(Math.abs((start.getTime() - due.getTime()) / oneDay));
    return diffDays;
  }
}