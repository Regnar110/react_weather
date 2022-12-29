import React, {Component} from 'react';
import '../styles/weathersection.scss';
import WeatherCard from '../components/WeatherCard';

class WeatherSection extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div className='weather_section_container'>
                <WeatherCard />
            </div>
        )
    }
}

export default WeatherSection;