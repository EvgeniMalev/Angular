import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Country type app</h1>
    <app-country-item [country]="selectedCountry"></app-country-item>
    <app-republic-item [republic]="selectedRepublic"></app-republic-item>
    <app-monarchy-item [monarchy]="selectedMonarchy"></app-monarchy-item>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCountry = { name: 'United States', population: 330000000 };
  selectedRepublic = { name: 'France', population: 67000000 };
  selectedMonarchy = { name: 'United Kingdom', population: 68000000, ruler: 'Charlez III' };
}
