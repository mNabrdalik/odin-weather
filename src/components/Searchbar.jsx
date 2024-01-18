import React from "react"
import { useState } from 'react'

import locationIcon from "../images/location.png" 
import searchIcon from "../images/ic_baseline-search.png"

export default function Searchbar() {

    const [searchLocation, setSearchLocation] = useState('')

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchLocation(searchTerm)
    }

    const searchForecast = (e) => {
        console.log(searchLocation);
    }

    // onclick na button, któy szuka miasta w apiweather

    return (
        <div className="searchbar">
            <img src={locationIcon} alt="location-icon" />
            <input 
                type="text" 
                value={searchLocation}
                onChange={handleInputChange}
                placeholder= "Search City or Zip Code"
            />
            <button type="button" aria-label="Search City" onClick={searchForecast}><img src={searchIcon} alt="Search" /></button>
        </div>
    )
}