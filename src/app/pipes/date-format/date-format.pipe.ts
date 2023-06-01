import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: any, format: string = 'MMM d, y'): string {
    if (typeof value === 'number') {
      // Jeśli wartość jest liczbą, przekształć ją na obiekt Date
      value = new Date(value * 1000);
    }
    return formatDate(value, format, 'en-US');
  }
}