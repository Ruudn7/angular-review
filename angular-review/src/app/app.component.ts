import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lista zadań';
  counter = 0;

  constructor() {
    setInterval( () => {}, 1000);
  }

  get footer(): string {
    return '2020 © Lista zadań,All rights reserved.';
  }

  getInfo(): string {
    console.log('wywołane');
    return 'Tekst wyświetlony z metody';
  }

  count(): void {
    this.counter++;
  }

  notBinded(): void {
    console.log('Ta metoda nie jest bindowana');
  }
}
