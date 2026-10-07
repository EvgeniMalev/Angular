package com.weatherstation.repository;

import com.weatherstation.entity.WeatherData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeatherRepository
        extends JpaRepository<WeatherData, Long> {
}
