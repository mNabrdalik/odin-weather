import React from "react"

export default function UnitSwitcher({setIsCelsius}) {


    const changeUnit = () => {
        setIsCelsius((prevIsCelsius) => !prevIsCelsius)
    }

    return (
        <label className="unitSwitch" >
            <input type="checkbox" onClick={changeUnit}/>
            <span className="slider round"></span>
        </label>
    )
}