import React, { useEffect } from 'react'
import '../styles/weatheroptiondrop.scss'

const WeatherOptionDrop = () => {
    return(
        <div className='weather-option-drop'>
            <div id='hourafterhour'>Weather hour after hour</div>
            <div id='sevendays'>Wethaer 7 days forward</div>
        </div>
    )
}

export default WeatherOptionDrop;