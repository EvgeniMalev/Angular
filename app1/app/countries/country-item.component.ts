import { Component, Input } from '@angular/core';
import { Country } from './country';

@Component({
  selector: 'app-country-item',
  template: `
    <div>
      <h2>Country: {{ country.name }}</h2>
      <p>Population: {{ country.population }}</p>
    </div>
  `
})
export class CountryItemComponent {
  @Input() country: Country;
}
