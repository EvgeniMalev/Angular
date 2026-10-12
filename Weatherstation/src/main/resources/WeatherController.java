
package com.weatherstation.controller;

import com.weatherstation.entity.WeatherData;
import com.weatherstation.service.WeatherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/weather")
@CrossOrigin(origins = "http://localhost:4200")
public class WeatherController {

    private final WeatherService service;

    public WeatherController(WeatherService service) {
        this.service = service;
    }

    @GetMapping
    public List<WeatherData> getAll() {
        return service.getAll();
    }

    @PostMapping
    public WeatherData add(
            @RequestBody WeatherData data) {

        return service.save(data);
    }
}
