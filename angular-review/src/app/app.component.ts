import { Task } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  config: { [key: string]: string } = {};
  scale = 1;
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

  createTask(name: string, date: string): void {
    const task: Task = {
      name,
      deadline: date,
      done: false
    };
    this.tasks.push(task);
  }

  zoom(deltaY: number): void {
    const direction = deltaY < 0 ? -1 : 1;
    this.scale += 0.1 * direction;
  }
}
