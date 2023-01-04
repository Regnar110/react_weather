import React  from 'react';
import '../styles/weathersection.scss';
import WeatherCard from '../components/WeatherCard';
import {daySvgs, nightSvgs} from '../components/weatherTypeCodes.js'

const WeatherSection = ({city, weather, currentLocationTime}) => {
    const cloudsType = [
        {
            type: "Cloudless",
            cover: 0
        },
        {
            type: "Sunny",
            cover: 10
        },
        {
            type: "Scattered clouds",
            cover: 20
        },
        {
            type: "Slightly cloudy",
            cover: 30
        },
        {
            type: "Partly cloudy",
            cover: 40
        },
        {
            type: "Cloudy",
            cover: 50
        },
        {
            type: "Mostly cloudy",
            cover: 60
        },
        {
            type: "Nearly overcast",
            cover: 70
        },
        {
            type: "Overcast",
            cover: 80
        },
        {
            type: "Sky obscured",
            cover: 90
        },
        {
            type: "Sky obscured",
            cover: 100
        },

    ]
    return(
        <div className='weather_section_container'>
            {
                weather.map((el, i) => {
                    if(i === 0) {
                        return <WeatherCard cloudsType={cloudsType} city={city[0].city} weather={el} currentLocationTime={currentLocationTime} key={i} />
                    } else {
                        return <WeatherCard cloudsType={cloudsType} weather={el} currentLocationTime={currentLocationTime} key={i} />
                    }
                })
            }
        </div>
    )
}


export default WeatherSection;