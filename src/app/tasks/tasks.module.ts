import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTaskComponent } from '../main-task/main-task.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from '../task/task.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { ColorTasksDirective } from '../color-tasks.directive';
import { DateFormatPipe } from '../date-format.pipe';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [MainTaskComponent, TaskComponent,TaskListComponent,ColorTasksDirective, DateFormatPipe],
  imports: [
    CommonModule,TasksRoutingModule
  ],
  bootstrap: [MainTaskComponent]
})
export class TasksModule { }
