import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../../interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
    "faCheck" = faCheck;

    @Output() newTask = new EventEmitter<Task>();
    DESCRIPTION_MAX_LENGTH = 25;
    description!: string;

    constructor() { }

    ngOnInit(): void {
    }

    addTask(description: string): void {
        if (description.trim() === ''
            || description.length > this.DESCRIPTION_MAX_LENGTH)
                return;

        const task: Task = {
          description,
          completed: false
        }
        this.description = '';
        this.newTask.emit(task);
    }
}
