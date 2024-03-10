import { Component, Input } from '@angular/core';
import { Republic } from './country';

@Component({
  selector: 'app-republic-item',
  template: `
    <div>
      <h2>Republic: {{ republic.name }}</h2>
      <p>Population: {{ republic.population }}</p>
    </div>
  `
})
export class RepublicItemComponent {
  @Input() republic: Republic;
}
