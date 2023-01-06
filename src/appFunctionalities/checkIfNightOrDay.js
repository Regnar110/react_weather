const checkIfNightOrDay = (currentLocationTime, sunset, sunrise) => {
    const [ sunsetHours, sunsetMinutes ] = sunset.split(":")
    const [ sunriseHours, sunriseMinutes ] = sunrise.split(":")
    const [ currentHour, currentMinutes ]= currentLocationTime.split(":")
    const sunsetTIme = new Date(2022, 0, 1, +sunsetHours, +sunsetMinutes);
    const sunriseTime = new Date(2022, 0, 1, +sunriseHours, +sunriseMinutes);
    const currentTime = new Date(2022, 0, 1, +currentHour, +currentMinutes).getTime();

    if(currentTime > sunsetTIme || currentTime < sunriseTime) {
        return "night"
    } else {
        return "day"
    }
}

export default checkIfNightOrDay;