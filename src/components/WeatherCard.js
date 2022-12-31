import React from 'react';
import '../styles/weathercard.scss'
import sun from '../assets/sun.png'
import sunrise from '../assets/wtb-sunrise.png'

const WeatherCard = () => {
    return(
        <React.Fragment>
            <div className='weather-card'>
                <span className='city-card-name'>Warsaw</span>
                <div className='weather-card-data-subcontainer'>
                    <div className='weather-top-bar'>
                        <span className='wtb-date'>00:28</span>
                        <div className='wtb-data wtb-sunrise'><img src={sunrise} alt='sunrise'/>10:00 - 15:00</div>
                    </div>
                    <div className='day-name-and-date'>
                        <span>Monday</span>
                        <span>30 December</span>
                    </div>
                    <div className='card-datas'>
                        <div className='weather-card-main-data'>
                            <div className='weather-temperature-and-icon'>
                                <img src={sun} alt='weather-icon'/>
                                <div className='current-temperature'>
                                    -20°C
                                </div>
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
                                    <span  className='rad-data'>1000 hPa</span>
                                </div>
                                <div className='additional-data wind'>
                                    <span className='rad-description'>Wind</span>
                                    <span  className='rad-data'>7 km/h</span>
                                </div>
                            </div>
                        </div>    
                        <div className='card-prediction-datas'>
                            <div className='predictions-header'>
                                <span>PREDICTIONS</span>
                            </div>
                            <div className='predictions-data'>
                                <div className='pd-data temperature'>
                                    <span className='data-description'>Temperature</span>
                                    <div className='sub-data'>
                                        <span>min: -10°C</span>
                                        <span>max: 20°C</span>    
                                    </div>
                                </div>
                                <div className='pd-data apparent-temperature'>
                                    <span className='data-description'>Apparent temperature</span>
                                    <div className='sub-data'>
                                        <span>min: -10°C</span>
                                        <span>max: 20°C</span>    
                                    </div>
                                </div>
                                <div className='pd-data rain'>
                                    <span className='data-description'>Rain summary</span>
                                    <div className='sub-data'>
                                        <span>22 mm</span>    
                                    </div>
                                </div>
                                <div className='pd-data showers'>
                                    <span className='data-description'>Showers summary</span>
                                    <div className='sub-data'>
                                        <span>19 mm</span>    
                                    </div>
                                </div>
                                <div className='pd-data snowfall'>
                                    <span className='data-description'>Snowfall summary</span>
                                    <div className='sub-data'>
                                        <span>35 cm</span>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WeatherCard;