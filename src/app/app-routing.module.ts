import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsComponentModule } from './components/teams/teams.component-module';

const routes: Routes = [{ path: 'teams', component: TeamsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamsComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
