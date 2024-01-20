import React from 'react';

export default function Current({weatherData, isCelsius}) {

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

                <div className='temperature-div'>
                    <p className='description'>Temperature:</p>
                    <p className='temperature'>{isCelsius ? weatherData.current.temp_c : weatherData.current.temp_f } <span className='temperature-unit'>{isCelsius ? "°C" : "°F"}</span></p>
                </div>
      
                <div className='left'>
                    <p className='description'>Feels Like:</p>
                    <p className='data'>{isCelsius ? weatherData.current.feelslike_c :weatherData.current.feelslike_f} <span className='temperature-unit'>{isCelsius ? "°C" : "°F"}</span></p>
                </div>
     
                <div>
                    <p className='description'>Humidity:</p>
                    <p className='data'>{weatherData.current.humidity} <span className="humidity-unit">%</span></p>
                </div>
             
                <div className='left'>
                    <p className='description'>Chance of Rain:</p>
                    <p className='data'>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain} <span className="rain-unit">%</span></p>
                </div>
   
                <div>
                    <p className='description'>Wind Speed:</p>
                    <p className='data'>{weatherData.current.wind_kph} <span className="wind-unit">km/h</span></p>
                </div>

            </div>
        </div>
    )
}