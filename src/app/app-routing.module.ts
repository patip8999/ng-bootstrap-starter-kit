import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { EmployeeComponentModule } from './components/employee/employee.component-module';

const routes: Routes = [{ path: 'teams', component: TeamsComponent }, { path: 'projects', component: ProjectsComponent }, { path: 'employees', component: EmployeeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamsComponentModule, ProjectsComponentModule, EmployeeComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
