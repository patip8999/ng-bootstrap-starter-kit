import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { DateFormatPipeModule } from "../../pipes/date-format/date-format.pipe-module";
import { CommonModule } from '@angular/common';
import { ProgresBarDirectiveModule } from 'src/app/directives/progres-bar.directive-module';


@NgModule({
    declarations: [ProjectsComponent],
    providers: [],
    exports: [ProjectsComponent],
    imports: [DateFormatPipeModule, CommonModule, ProgresBarDirectiveModule]
})
export class ProjectsComponentModule {
}
