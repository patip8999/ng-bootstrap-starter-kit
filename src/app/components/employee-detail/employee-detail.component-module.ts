import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DaysBetweenPipe } from 'src/app/pipes/days-betwen/days-betwen.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmployeeDetailComponent, DaysBetweenPipe],
  providers: [],
  exports: [EmployeeDetailComponent]
})
export class EmployeeDetailComponentModule {
}
