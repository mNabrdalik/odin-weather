import React from 'react';

export default function Forecast({weatherData, isCelsius, id}) {

    const options = {
        weekday: "long",
      };

    let today = new Date()
    let nextDay = new Date()
    nextDay.setDate(today.getDate() + id + 1)
    let nextDayString = nextDay.toLocaleDateString("en-US", options);

    if(!weatherData) {
        return null; //if variable weatherData empty
    } 

    return (
        <div className="forecast">
            <div className="forecast-main">
                
                <h3>{nextDayString}</h3>
                <div className='info'>
                    <div>
                        <p className='description'>Temperature:</p>
                        <p className='temperature'>{isCelsius ? weatherData.forecast.forecastday[id].day.avgtemp_c : weatherData.forecast.forecastday[0].day.avgtemp_f } <span className='temperature-unit'>{isCelsius ? "°C" : "°F"}</span></p>
                    </div>
                    <div>
                        <p className='description'>Humidity:</p>
                        <p className='data'>{weatherData.forecast.forecastday[id].day.avghumidity} <span className="humidity-unit">%</span></p>
                    </div>
                </div>
    

            </div>
            <div className="forecast-icon">
                <img 
                    src={weatherData.forecast.forecastday[id].day.condition.icon} 
                    alt={weatherData.forecast.forecastday[id].day.condition.text} 
                />
                <p>{weatherData.forecast.forecastday[id].day.condition.text} </p>
            </div>
         
        </div>
    )
}