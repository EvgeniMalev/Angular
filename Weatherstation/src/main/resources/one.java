
spring.h2.console.enabled=true

spring.datasource.url=jdbc:h2:mem:testdb

spring.jpa.hibernate.ddl-auto=update



export interface WeatherData {
  id?: number;
  temperature: number;
  humidity: number;
  pressure: number;
}



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl =
      'http://localhost:8080/api/weather';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  add(data: any): Observable<any> {
    return this.http.post(
      this.apiUrl,
      data
    );
  }
}

