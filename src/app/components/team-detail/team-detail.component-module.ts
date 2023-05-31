import { NgModule } from '@angular/core';
import { TeamDetailComponent } from './team-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DateFormatPipeModule } from "../../pipes/date-format/date-format.pipe-module";

@NgModule({
    declarations: [TeamDetailComponent],
    providers: [DateFormatPipeModule],
    exports: [TeamDetailComponent],
    imports: [CommonModule, RouterModule, DateFormatPipeModule]
})
export class TeamDetailComponentModule {
}
