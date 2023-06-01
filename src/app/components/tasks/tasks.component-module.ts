import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { DateFormatPipeModule } from "../../pipes/date-format/date-format.pipe-module";

@NgModule({
    declarations: [TasksComponent],
    providers: [],
    exports: [TasksComponent],
    imports: [CommonModule, DateFormatPipeModule]
})
export class TasksComponentModule {
}
