import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.unshift(task);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) 
      this.tasks.splice(index, 1);
  }

  completeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) 
      this.tasks.splice(index, 1, task);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
