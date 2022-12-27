import React, {Component} from 'react';
import '../styles/weathersection.scss';

class WeatherSection extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div className='weather_section_container'>
                <div className='weather_card card_1'>Card</div>
                <div className='weather_card card_2'>Card</div>
                <div className='weather_card card_3'>Card</div>
                <div className='weather_card card_4'>Card</div>
                <div className='weather_card card_5'>Card</div>
                <div className='weather_card card_6'>Card</div>
                <div className='weather_card card_7'>Card</div>
            </div>
        )
    }
}

export default WeatherSection;