
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent
implements OnInit {

  weatherData: any[] = [];

  constructor(
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {

    this.weatherService
      .getAll()
      .subscribe(data => {

        this.weatherData = data;
      });
  }
}
