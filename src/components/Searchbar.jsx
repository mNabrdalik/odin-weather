import React from "react";
import { useState } from 'react'

export default function Searchbar() {

    const [searchLocation, setSearchLocation] = useState('')

    const handleInputChange = (e) => { 
        const searchTerm = e.target.value;
        setSearchLocation(searchTerm)
      }

    return (
        <div>
            <input 
                type="text" 
                value={searchLocation}
                onChange={handleInputChange}
                placeholder= "Search City or Zip Code"
            />
        </div>
    )
}