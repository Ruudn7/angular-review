import { Task } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  taskName = '';
  config: { [key: string]: string } = {};
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: ' © Lista zadań,All rights reserved.',
        date: new Date().toDateString()
      };
    }, 500);
  }

  clearTasks(): void {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent): void {
    const target = event.target as HTMLInputElement;

    this.taskName = target.value;
  }

  createTask(): void {
    const task: Task = {
      name: this.taskName,
      deadline: new Date().toDateString(),
      done: false
    };
    this.tasks.push(task);
    this.taskName = '';
  }
}
