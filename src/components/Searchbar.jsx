import React from "react"
import { useState } from 'react'

import locationIcon from "../images/location.png" 
import searchIcon from "../images/ic_baseline-search.png"

export default function Searchbar({setWeatherData}) {

    const [searchLocation, setSearchLocation] = useState('')
    const [searchFocus, setSearchbarFocus] = useState(false)

    const toggleClassFocus = () => {
        setSearchbarFocus(true);
    }

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchLocation(searchTerm)
    }

    const searchForecast = async() => {
        if(searchLocation !== "") {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=eeb7ae86b1e04532835213150241801&q=${searchLocation}&days=4&aqi=no&alerts=no`);
            const result = await response.json();
            
            if(!result.error) {
                setWeatherData(result);
            } else {
                alert(result.error.message)
            }
        }

        setSearchbarFocus(false);
    }

    const handleKeyPress = (e) => {
        let key = e.key;
        if(key === "Enter") {
            searchForecast()
        }
    }

    
    return (
        <div className={searchFocus ? "searchbar focus" : "searchbar"} onClick={toggleClassFocus}>
            <img src={locationIcon} alt="location-icon" />
            <input 
                type="text" 
                value={searchLocation}
                onChange={handleInputChange}
                placeholder= "Search City or Zip Code"
                onKeyDown={(e) => handleKeyPress(e)}
            />
            <button type="button" aria-label="Search City" onClick={searchForecast} ><img src={searchIcon} alt="Search" /></button>
        </div>
    )
}