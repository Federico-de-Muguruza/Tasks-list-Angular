import { Component } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-lamansys-2';
  faTrash = faTrash;
  tasks : Task[] = [];

  addTask(description : string) {
    if (description.trim() === '') return;

    const task = {
      description,
    }

    this.tasks.unshift(task);
  }

  deleteTask(task : Task) {
    const index = this.tasks.indexOf(task);
    if (index > -1) 
      this.tasks.splice(index, 1);
  }

}

interface Task {
  description : string
}
