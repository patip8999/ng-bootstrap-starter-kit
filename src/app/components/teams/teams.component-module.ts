import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [CommonModule],
  declarations: [TeamsComponent],
  providers: [],
  exports: [TeamsComponent]
})
export class TeamsComponentModule {
}
