import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TeamsComponent],
  providers: [],
  exports: [TeamsComponent]
})
export class TeamsComponentModule {
}
