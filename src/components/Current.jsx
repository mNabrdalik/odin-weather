import React, { useState, useEffect } from 'react';

export default function Current({weatherData}) {

    const options = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      };

    let today = new Date().toLocaleDateString("en-US", options);

    if(!weatherData) {
        return null; //if variable weatherData empty
    } 

    return (
        <div className="current">
            <div className="current-main">
                <h1>{weatherData.location.name}</h1>
                <h2>{weatherData.location.country}</h2>
                <h3>{today}</h3>
                <img 
                    src={weatherData.current.condition.icon} 
                    alt={weatherData.current.condition.text} 
                />
                <p>{weatherData.current.condition.text}</p>
            </div>
            <div className="current-detail">
                <p className='description'>Temperature:</p>
                <p>{weatherData.current.temp_c} <span className='temperature-unit'>°C</span></p>
                <p className='description'>Feels Like:</p>
                <p>{weatherData.current.feelslike_c} <span className='temperature-unit'>°C</span></p>
                <p className='description'>Humidity:</p>
                <p>{weatherData.current.humidity} <span className="humidity-unit">%</span></p>
                <p className='description'>Chance of Rain:</p>
                <p>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain} <span className="rain-unit">%</span></p>
                <p className='description'>Wind Speed:</p>
                <p>{weatherData.current.wind_kph} <span className="wind-unit">km/h</span></p>
          
            </div>
        </div>
    )
}