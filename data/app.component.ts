import { Component } from '@angular/core';

interface Person {
  name: string;
  info: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = '';
  info: string = '';

  people: Person[] = [];

  addPerson(): void {

    if (!this.name || !this.info) {
      return;
    }

    this.people.push({
      name: this.name,
      info: this.info
    });

    this.name = '';
    this.info = '';
  }
}
