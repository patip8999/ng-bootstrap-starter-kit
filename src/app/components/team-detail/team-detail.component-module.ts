import { NgModule } from '@angular/core';
import { TeamDetailComponent } from './team-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [TeamDetailComponent],
  providers: [],
  exports: [TeamDetailComponent]
})
export class TeamDetailComponentModule {
}
