import { Component, OnInit } from '@angular/core';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../interfaces/Task';
import { LocalStorageService } from '../local-storage.service';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  "faExpand" = faExpand;

  tasks: Task[] = [];

  constructor(private localStorage: LocalStorageService,
              private screen: ScreenService) { }
  
  ngOnInit(): void {
    this.tasks = this.localStorage.get('tasks');
  }
  
  addTask(task: Task): void {
    this.tasks.unshift(task);
    this.localStorage.save('tasks', this.tasks);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1);
      this.localStorage.save('tasks', this.tasks);
    }
  }

  completeTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1, task);
      this.localStorage.save('tasks', this.tasks);
    }
  }

  fullScreen() {
    this.screen.fullScreen();
  }
}
