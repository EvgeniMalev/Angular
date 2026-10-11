
package com.weatherstation.service;

import com.weatherstation.entity.WeatherData;
import com.weatherstation.repository.WeatherRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WeatherService {

    private final WeatherRepository repository;

    public WeatherService(WeatherRepository repository) {
        this.repository = repository;
    }

    public List<WeatherData> getAll() {
        return repository.findAll();
    }

    public WeatherData save(WeatherData data) {
        return repository.save(data);
    }
}
