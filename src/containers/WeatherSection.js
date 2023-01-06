import React  from 'react';
import '../styles/weathersection.scss';
import WeatherCard from '../components/WeatherCard';
import weatherIconsObject from '../appFunctionalities/weatherTypeCodes.js'
import checkIfNightOrDay from '../appFunctionalities/checkIfNightOrDay';

const WeatherSection = ({city, weather, currentLocationTime}) => {
    let hoursIndex = new Date().getHours();
    let weatherIconsAndCodes;

    const nightOrDay = checkIfNightOrDay(currentLocationTime, weather[0].sunset, weather[0].sunrise)
    nightOrDay === "night" ? weatherIconsAndCodes = weatherIconsObject({night:true}) : weatherIconsAndCodes = weatherIconsObject({day: true})

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
                        return <WeatherCard cloudsType={cloudsType} city={city[0].city} weather={el} currentLocationTime={currentLocationTime} weatherIcon={weatherIconsAndCodes[weather[i].weathercode[hoursIndex]]} key={i} />
                    }
                    return ""; 
                })
            }
            <div className='six_days_predictions'>
                <span id='days_predictions_head'> Forecast for the next 6 days </span>
                {
                    weather.map((el, i) => {
                        if(i > 0) {
                            return <WeatherCard cloudsType={cloudsType} weather={el} currentLocationTime={currentLocationTime} weatherIcon={weatherIconsAndCodes[weather[i].weathercode[hoursIndex]]} key={i} />
                        }
                        return "";
                    })
                }
            </div>
        </div>
    )
}


export default WeatherSection;