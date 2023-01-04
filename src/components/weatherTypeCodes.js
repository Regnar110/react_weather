import clear_day from '../assets/wmo/day/clear-day.svg'
import fog_day from '../assets/wmo/day/fog-day.svg'
import haze_day from '../assets/wmo/day/haze-day.svg'
import overcast_day from '../assets/wmo/day/overcast-day.svg'
import partly_cloudy_day_drizzle from '../assets/wmo/day/partly-cloudy-day-drizzle.svg'
import partly_cloudy_day_fog from '../assets/wmo/day/partly-cloudy-day-fog.svg'
import partly_cloudy_day_hail from '../assets/wmo/day/partly-cloudy-day-hail.svg'
import partly_cloudy_day_haze from '../assets/wmo/day/partly-cloudy-day-haze.svg'
import partly_cloudy_day_rain from '../assets/wmo/day/partly-cloudy-day-rain.svg'
import partly_cloudy_day_sleet from '../assets/wmo/day/partly-cloudy-day-sleet.svg'
import partly_cloudy_day_snow from '../assets/wmo/day/partly-cloudy-day-snow.svg'
import partly_cloudy_day from '../assets/wmo/day/partly-cloudy-day.svg'
import thunderstorm_day_rain from '../assets/wmo/day/thunderstorms-day-rain.svg'
import thunderstorm_day_snow from '../assets/wmo/day/thunderstorms-day-snow.svg'
import thunderstorm_day from '../assets/wmo/day/thunderstorms-day.svg'

//NIGHT ICONS

import clear_night from '../assets/wmo/night/clear-night.svg'
import fog_night from '../assets/wmo/night/fog-night.svg'
import haze_night from '../assets/wmo/night/haze-night.svg'
import overcast_night from '../assets/wmo/night/overcast-night.svg'
import partly_cloudy_night_drizzle from '../assets/wmo/night/partly-cloudy-night-drizzle.svg'
import partly_cloudy_night_fog from '../assets/wmo/night/partly-cloudy-night-fog.svg'
import partly_cloudy_night_hail from '../assets/wmo/night/partly-cloudy-night-hail.svg'
import partly_cloudy_night_haze from '../assets/wmo/night/partly-cloudy-night-haze.svg'
import partly_cloudy_night_rain from '../assets/wmo/night/partly-cloudy-night-rain.svg'
import partly_cloudy_night_sleet from '../assets/wmo/night/partly-cloudy-night-sleet.svg'
import partly_cloudy_night_snow from '../assets/wmo/night/partly-cloudy-night-snow.svg'
import partly_cloudy_night from '../assets/wmo/night/partly-cloudy-night.svg'
import thunderstorm_night_rain from '../assets/wmo/night/thunderstorms-night-rain.svg'
import thunderstorm_night_snow from '../assets/wmo/night/thunderstorms-night-snow.svg'
import thunderstorm_night from '../assets/wmo/night/thunderstorms-night.svg'

class weatherCodesForTimeoFDay {
    constructor(        
        clear,
        fog,
        haze,
        overcast,
        partly_cloudy,
        partly_cloudy_drizzle,
        partly_cloudy_fog,
        partly_cloudy_hail,
        partly_cloudy_haze,
        partly_cloudy_rain,
        partly_cloudy_sleet,
        partly_cloudy_snow,
        thunderstorm,
        thunderstorm_rain,
        thunderstorm_snow
    )
    {
        this.clear = clear;
        this.fog = fog;
        this.haze = haze;
        this.overcast = overcast;
        this.partly_cloudy = partly_cloudy;
        this.partly_cloudy_drizzle = partly_cloudy_drizzle;
        this.partly_cloudy_fog = partly_cloudy_fog;
        this.partly_cloudy_hail = partly_cloudy_hail;
        this.partly_cloudy_haze = partly_cloudy_haze;
        this.partly_cloudy_rain = partly_cloudy_rain;
        this.partly_cloudy_sleet = partly_cloudy_sleet;
        this.partly_cloudy_snow = partly_cloudy_snow;
        this.thunderstorm = thunderstorm;
        this.thunderstorm_rain = thunderstorm_rain;
        this.thunderstorm_snow = thunderstorm_snow;
    }
}
    const daySvgs = new weatherCodesForTimeoFDay(
        clear_day,
        fog_day,
        haze_day,
        overcast_day,
        partly_cloudy_day,
        partly_cloudy_day_drizzle,
        partly_cloudy_day_fog,
        partly_cloudy_day_hail,
        partly_cloudy_day_haze,
        partly_cloudy_day_rain,
        partly_cloudy_day_sleet,
        partly_cloudy_day_snow,
        thunderstorm_day,
        thunderstorm_day_rain,
        thunderstorm_day_snow
    )

    const nightSvgs = new weatherCodesForTimeoFDay(
        clear_night,
        fog_night,
        haze_night,
        overcast_night,
        partly_cloudy_night,
        partly_cloudy_night_drizzle,
        partly_cloudy_night_fog,
        partly_cloudy_night_hail,
        partly_cloudy_night_haze,
        partly_cloudy_night_rain,
        partly_cloudy_night_sleet,
        partly_cloudy_night_snow,
        thunderstorm_night,
        thunderstorm_night_rain,
        thunderstorm_night_snow
    )

// const weatherIconType = {
//     day: {

//     }
//     0: 
//     1:
//     2:
//     3:
//     45:
//     48:
//     51:
//     53:
//     55:
//     56:
//     57:
//     61:
//     63:
//     65:
//     66:
//     67:
//     71:
//     73:
//     75:
//     77:
//     80:
//     81:
//     82:
//     85:
//     86:
//     95:
//     96:
//     99:
// }

export {daySvgs, nightSvgs};