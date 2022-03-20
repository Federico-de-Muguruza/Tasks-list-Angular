import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  @Input() task = {} as Task;

  constructor() { }

  ngOnInit(): void {
  }

}
