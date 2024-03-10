import { Component, Input } from '@angular/core';
import { Monarchy } from './country';

@Component({
  selector: 'app-monarchy-item',
  template: `
    <div>
      <h2>Monarchy: {{ monarchy.name }}</h2>
      <p>Population: {{ monarchy.population }}</p>
      <p>Ruler: {{ monarchy.ruler }}</p>
    </div>
  `
})
export class MonarchyItemComponent {
  @Input() monarchy: Monarchy;
}
