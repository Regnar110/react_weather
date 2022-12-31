import React, {Component} from 'react';
import '../styles/weathersection.scss';
import WeatherCard from '../components/WeatherCard';

const WeatherSection = ({city, weather}) => {
    return(
        <div className='weather_section_container'>
            <WeatherCard city={city[0].city} weather={weather}/>
        </div>
    )
}


export default WeatherSection;