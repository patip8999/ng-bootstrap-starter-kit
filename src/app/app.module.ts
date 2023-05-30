import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponentModule } from './components/navbar/navbar.component-module';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { TeamsService } from './services/teams.service';
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavbarComponentModule,
    TeamsComponentModule
  ],
  providers: [TeamsService, ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
