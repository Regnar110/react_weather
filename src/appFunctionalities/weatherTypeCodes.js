//DAY

import clear_day from '../assets/wmo/day/clear-day.svg'
import fog_day from '../assets/wmo/day/fog-day.svg'
import overcast_day from '../assets/wmo/day/overcast-day.svg'
import partly_cloudy_day_drizzle from '../assets/wmo/day/partly-cloudy-day-drizzle.svg'
import partly_cloudy_day_rain from '../assets/wmo/day/partly-cloudy-day-rain.svg'
import partly_cloudy_day_sleet from '../assets/wmo/day/partly-cloudy-day-sleet.svg'
import partly_cloudy_day_snow from '../assets/wmo/day/partly-cloudy-day-snow.svg'
import partly_cloudy_day from '../assets/wmo/day/partly-cloudy-day.svg'
import thunderstorm_day_rain from '../assets/wmo/day/thunderstorms-day-rain.svg'
import thunderstorm_day from '../assets/wmo/day/thunderstorms-day.svg'

//NIGHT ICONS

import clear_night from '../assets/wmo/night/clear-night.svg'
import fog_night from '../assets/wmo/night/fog-night.svg'
import overcast_night from '../assets/wmo/night/overcast-night.svg'
import partly_cloudy_night_drizzle from '../assets/wmo/night/partly-cloudy-night-drizzle.svg'
import partly_cloudy_night_rain from '../assets/wmo/night/partly-cloudy-night-rain.svg'
import partly_cloudy_night_sleet from '../assets/wmo/night/partly-cloudy-night-sleet.svg'
import partly_cloudy_night_snow from '../assets/wmo/night/partly-cloudy-night-snow.svg'
import partly_cloudy_night from '../assets/wmo/night/partly-cloudy-night.svg'
import thunderstorm_night_rain from '../assets/wmo/night/thunderstorms-night-rain.svg'
import thunderstorm_night from '../assets/wmo/night/thunderstorms-night.svg'


//UNIVERSAL 

import drizzle from '../assets/wmo/universal/drizzle.svg';
import rain from '../assets/wmo/universal/rain.svg'
import sleet from '../assets/wmo/universal/sleet.svg'
import snow from '../assets/wmo/universal/snow.svg'
import thunderstorm from '../assets/wmo/universal/thunderstorm.svg'


const weatherIconsObject = (time) => {
    let weatherIcons;
    if(time.day) {
        weatherIcons = { 
            0: clear_day,
            1: clear_day,
            2: partly_cloudy_day,
            3: overcast_day,
            45: fog_day,
            48: fog_day,
            51: partly_cloudy_day_drizzle,
            53: drizzle,
            55: drizzle,
            56: drizzle,
            57: drizzle,
            61: partly_cloudy_day_rain,
            63: rain,
            65: rain,
            66: partly_cloudy_day_sleet,
            67: sleet,
            71: partly_cloudy_day_snow,
            73: snow,
            75: snow,
            77: snow,
            80: partly_cloudy_day_drizzle,
            81: drizzle,
            82: drizzle,
            85: partly_cloudy_day_snow,
            86: snow,
            95: thunderstorm,
            96: thunderstorm_day,
            99: thunderstorm_day_rain
        }
        return weatherIcons;
    } else if(time.night) {
            weatherIcons = { 
                0: clear_night,
                1: clear_night,
                2: partly_cloudy_night,
                3: overcast_night,
                45: fog_night,
                48: fog_night,
                51: partly_cloudy_night_drizzle,
                53: drizzle,
                55: drizzle,
                56: drizzle,
                57: drizzle,
                61: partly_cloudy_night_rain,
                63: rain,
                65: rain,
                66: partly_cloudy_night_sleet,
                67: sleet,
                71: partly_cloudy_night_snow,
                73: snow,
                75: snow,
                77: snow,
                80: partly_cloudy_night_drizzle,
                81: drizzle,
                82: drizzle,
                85: partly_cloudy_night_snow,
                86: snow,
                95: thunderstorm,
                96: thunderstorm_night,
                99: thunderstorm_night_rain
            }
        return weatherIcons;
    }
}
export default weatherIconsObject;