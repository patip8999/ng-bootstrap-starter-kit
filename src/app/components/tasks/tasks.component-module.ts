import { NgModule } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { DateFormatPipeModule } from '../../pipes/date-format/date-format.pipe-module';
import { PercentagePipeModule } from 'src/app/pipes/percentage/percentage.pipe-module';
import { ProgressPipeModule } from 'src/app/pipes/progress/progress.pipe-module';

@NgModule({
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
  imports: [
    CommonModule,
    DateFormatPipeModule,
    PercentagePipeModule,
    ProgressPipeModule,
  ],
})
export class TasksComponentModule {}
