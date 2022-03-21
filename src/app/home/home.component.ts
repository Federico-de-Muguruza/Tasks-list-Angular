import { Component, OnInit, Input } from '@angular/core';
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
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  completeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1, task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  constructor() { }

  ngOnInit(): void {
    if ( ! localStorage.getItem('tasks'))
      localStorage.setItem('tasks', JSON.stringify([]));

    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[{}]');
  }

}
