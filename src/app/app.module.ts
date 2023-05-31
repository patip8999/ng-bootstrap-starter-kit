import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponentModule } from './components/navbar/navbar.component-module';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { TeamsService } from './services/teams.service';
import { ProjectsService } from './services/projects.service';
import { EmployeesService } from './services/employees.service';
import { EmployeeComponentModule } from './components/employee/employee.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { TasksService } from './services/tasks.service';
import { ChecklistItemsService } from './services/check-list-item.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponentModule,
    TeamsComponentModule,
    EmployeeComponentModule,
    HomeComponentModule,
    HomeComponentModule
  ],
  providers: [TeamsService, ProjectsService, EmployeesService, TasksService, ChecklistItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
