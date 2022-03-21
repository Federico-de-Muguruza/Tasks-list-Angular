import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { GenericModule } from '../generic/generic.module';

@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    GenericModule,
    FormsModule,
  ],
  exports: [
    AddTaskComponent,
    TaskComponent
  ]
})

export class TaskModule { }
