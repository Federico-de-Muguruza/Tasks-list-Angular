import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faShare, faBook } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  "faTrash" = faTrash;
  "faShare" = faShare;
  "faBook" = faBook;

  @Input() task = {} as Task;
  @Output() deletedTask = new EventEmitter<Task>();
  @Output() updatedTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: Task): void {
    this.deletedTask.emit(task);
  }

  completeTask(task: Task): void {
    task.completed = ! task.completed;
    this.updatedTask.emit(task);
  }
}
