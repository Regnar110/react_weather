import React, {Component} from 'react';
import '../styles/weathersection.scss';
import WeatherOptionDrop from '../components/WeatherOptionDrop';
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
                <WeatherOptionDrop />
            </div>
        )
    }
}

export default WeatherSection;