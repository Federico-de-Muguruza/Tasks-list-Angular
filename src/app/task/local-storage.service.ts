import { Injectable } from '@angular/core';
import { Task } from '../../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  save(key: string, tasks: Task[]): void {
    localStorage.setItem(key, JSON.stringify(tasks));
  }

  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
}
