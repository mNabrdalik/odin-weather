import React from "react"
import { useState } from 'react'


export default function UnitSwitcher() {

    const [tempUnit, setTempUnit] = useState('C')

    // const searchForecast = (e) => {
    //     console.log(searchLocation);
    // }

    // onclick na button, któy szuka miasta w apiweather

    return (
        <label className="unitSwitch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
    )
}