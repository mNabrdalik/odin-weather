import './app.scss';
import React, { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import UnitSwitcher from './components/UnitSwitcher';

function App() {

  // const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=eeb7ae86b1e04532835213150241801&q=london&days=4&aqi=no&alerts=no');
        const result = await response.json();
        // console.log(result);
        //current
        //console.log(result.location.name);
        // console.log(result.location.country);
        // console.log(result.location.localtime);
        // console.log(result.current.temp_c);
        // console.log(result.current.temp_f);
        // console.log(result.current.condition.text);
        // console.log(result.current.condition.icon);
        // console.log(result.current.feelslike_c);
        // console.log(result.current.feelslike_f);
        // console.log(result.current.humidity);
        // console.log(result.forecast.forecastday[0].day.daily_chance_of_rain);
        // console.log(result.current.wind_kph);

        //forecast [1] - [3] or [0] - [2]
        // console.log(result.forecast.forecastday[0].date);
        // console.log(result.forecast.forecastday[0].day.avgtemp_c);
        // console.log(result.forecast.forecastday[0].day.avgtemp_f);
        // console.log(result.forecast.forecastday[0].day.avghumidity);
        // console.log(result.forecast.forecastday[0].day.condition.icon);

      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };
    fetchData();
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <Searchbar/>
        <UnitSwitcher/>
      </header>
    </div>
  );
}

export default App;
