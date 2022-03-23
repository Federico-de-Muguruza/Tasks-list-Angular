// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GenericModule } from '../generic/generic.module';
// Components
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskComponent } from './task/task.component';
import { HomeComponent } from './home/home.component';
// Services
import { LocalStorageService } from './local-storage.service';
import { ScreenService } from './screen.service';

@NgModule({
  declarations: [
    AddTaskComponent,
    TaskComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    GenericModule,
    FormsModule,
  ],
  providers: [LocalStorageService, ScreenService],
  exports: [],
})

export class TaskModule { }
