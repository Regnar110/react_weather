import React from 'react';
import '../styles/weathercard.scss'
import sunriseImg from '../assets/wtb-sunrise.png'

const WeatherCard = ({city, weather, cloudsType, currentLocationTime, weatherIcon}) => {
    const dateIndex = new Date().getHours();
    const {time, cloudcover, temperature_2m_min, temperature_2m_max, sunset, sunrise, snowfall_sum, showers_sum, rain_sum, current_weather, apparent_temperature, windspeed_10m, apparent_temperature_max, apparent_temperature_min, surface_pressure, predicted_temperature} = weather;
    return(
        <React.Fragment>
            <div className='weather-card'>
                <span className='city-card-name'>{city}</span>
                <div className='weather-card-data-subcontainer'>
                    <div className='weather-top-bar'>
                        <span className='wtb-date'>{currentLocationTime}</span>
                        <div className='wtb-data wtb-sunrise'><img src={sunriseImg} alt='sunrise'/>{`${sunrise} - ${sunset}`} <i class="fa-solid fa-moon" style={{color: 'white', paddingLeft:"5px" }}></i></div>
                    </div>
                    <div className='day-name-and-date'>
                        <span>{time[0]}</span>
                        <span>{time[1]}</span>
                    </div>
                    <div className='card-datas'>
                        <div className='weather-card-main-data'>
                            <div className='weather-temperature-and-icon'>
                                <img src={weatherIcon} alt='weather-icon'/>
                                <div className='current-temperature'>
                                    {current_weather ? Math.round(current_weather.temperature)+"°C" : Math.round(predicted_temperature) +"°C"}
                                </div>
                            </div>
                        </div>
                        <div className='weather-additional-data'>
                            <div className='clouds'>
                                <i className="fa-solid fa-cloud"></i>
                                {
                                    cloudsType.map(el => el.cover === Math.round(cloudcover[dateIndex]/10)*10 ? " " + el.type : "")
                                }
                            </div>
                            <div className='rest-additional-data'>
                                <div className='additional-data apparent-temperature'>
                                    <span className='rad-description'>Apparent</span>
                                    <span className='rad-data'>{apparent_temperature[dateIndex]+"°C"}</span>
                                </div>
                                <div className='additional-data pressure'>
                                    <span className='rad-description'>Pressure</span>
                                    <span  className='rad-data'>{surface_pressure[dateIndex] + " hPa"}</span>
                                </div>
                                <div className='additional-data wind'>
                                    <span className='rad-description'>Wind</span>
                                    <span  className='rad-data'>{current_weather? current_weather.windspeed +" km/h" : windspeed_10m[dateIndex] + " km/h" }</span>
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
                                        <span>min: {temperature_2m_min}°C</span>
                                        <span>max: {temperature_2m_max}°C</span>    
                                    </div>
                                </div>
                                <div className='pd-data apparent-temperature'>
                                    <span className='data-description'>Apparent temperature</span>
                                    <div className='sub-data'>
                                        <span>min: {apparent_temperature_min}°C</span>
                                        <span>max: {apparent_temperature_max}°C</span>    
                                    </div>
                                </div>
                                <div className='pd-data rain'>
                                    <span className='data-description'>Rain summary</span>
                                    <div className='sub-data'>
                                        <span>{rain_sum}</span>    
                                    </div>
                                </div>
                                <div className='pd-data showers'>
                                    <span className='data-description'>Showers summary</span>
                                    <div className='sub-data'>
                                        <span>{showers_sum} mm</span>    
                                    </div>
                                </div>
                                <div className='pd-data snowfall'>
                                    <span className='data-description'>Snowfall summary</span>
                                    <div className='sub-data'>
                                        <span>{snowfall_sum} cm</span>    
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

//Font awesome "Sky" icons for weather icon