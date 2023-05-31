import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent]
})
export class EmployeeDetailComponentModule {
}
