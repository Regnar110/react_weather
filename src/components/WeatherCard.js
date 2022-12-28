import React from 'react';
import '../styles/weathercard.scss'
import sun from '../assets/sun.png'
import sunrise from '../assets/wtb-sunrise.png'

const WeatherCard = () => {
    return(
        <React.Fragment>
            <div className='weather-card'>
                <div className='weather-top-bar'>
                    <span className='wtb-date'>Weather now - today 00:28</span>
                    <div className='wtb-data wtb-sunrise'><img src={sunrise} alt='sunrise'/>10:00 - 15:00</div>
                </div>
                <div className='weather-card-data-subcontainer'>
                    <div className='weather-temperature-and-icon'>
                        <img src={sun} alt='weather-icon'/>
                        <div className='current-temperature'>
                        -20°C
                        </div>
                    </div>
                    <div className='weather-additional-data'>
                        <div className='clouds'>Mostly cloudly</div>
                        <div className='rest-additional-data'>
                            <div className='additional-data apparent-temperature'>
                                <span className='rad-description'>Apparent</span>
                                <span className='rad-data'>-10°C</span>
                            </div>
                            <div className='additional-data pressure'>
                                <span className='rad-description'>Pressure</span>
                                <span  className='rad-data'>1000 hPa</span></div>
                            <div className='additional-data wind'>
                                <span className='rad-description'>Wind</span>
                                <span  className='rad-data'>7 km/h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WeatherCard;