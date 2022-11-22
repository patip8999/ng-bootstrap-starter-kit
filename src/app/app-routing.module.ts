import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentModule } from './components/login/login.component-module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
