import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { EmployeeComponentModule } from './components/employee/employee.component-module';
import { TeamDetailComponentModule } from './components/team-detail/team-detail.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: '', component: HomeComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/:taskId', component: TasksComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamsComponentModule,
    ProjectsComponentModule,
    EmployeeComponentModule,
    TeamDetailComponentModule,
    TasksComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
