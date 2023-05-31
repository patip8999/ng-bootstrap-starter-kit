import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamsComponentModule } from '../teams/teams.component-module';
import { EmployeeComponentModule } from '../employee/employee.component-module';

@NgModule({
  imports: [CommonModule, RouterModule, TeamsComponentModule, EmployeeComponentModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
