import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [EmployeeComponent],
  providers: [],
  exports: [EmployeeComponent]
})
export class EmployeeComponentModule {
}
