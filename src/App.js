import './app.scss';
import React, { useState } from 'react';
import Searchbar from './components/Searchbar';
import UnitSwitcher from './components/UnitSwitcher';
import Current from './components/Current';
import Forecast from './components/Forecast';

function App() {

  const [weatherData, setWeatherData] = useState() //to get data from seachbar
  const [isCelsius, setIsCelsius] = useState(true) //to get temperature unit switcher

  const forecasts = [];

  for (let i = 0; i < 3; i++) {
    forecasts.push(
      <Forecast weatherData={weatherData} isCelsius={isCelsius} key={i} id={i}/>
    );
  }
      
  return (
    <div className="App">
      <header className="App-header">
        <Searchbar setWeatherData = {setWeatherData} />
        <UnitSwitcher setIsCelsius ={setIsCelsius}/>
      </header>
      <main>
        <Current weatherData = {weatherData} isCelsius ={isCelsius}/>
        <div className='forecasts'>
        {forecasts}
        </div>
      </main>
    </div>
  );
}

export default App;
