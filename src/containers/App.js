import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/App.scss';
import WeatherSection from './WeatherSection.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      locationSearchInput: "",
      currentLocation: [],
      currentWeather: [],
      pacSuggestions: []
    }
  }

  prepareWeathersDataForCardComponents = async (weatherDatas) => {
    const { hourly, daily } = weatherDatas
    const { cloudcover, weathercode, surface_pressure, windspeed_10m, apparent_temperature } = hourly // Jak podzielić te tablice żeby każda z nich zawierała po 7 subtablic, reprezentujące dane godzinowe dla kazdego z siedmiu dni?
    const arraysToDivide = [cloudcover, weathercode, surface_pressure, windspeed_10m, apparent_temperature];
const keys = ["cloudcover", "weathercode", "surface_pressure", "windspeed_10m", "apparent_temperature"];
const numberOfArrays = 5;
const elementsPerArray = 24;
const numberOfSubarraysToKeep = 7;

const result = {};

for (let i = 0; i < numberOfArrays; i++) {
  const originalArray = arraysToDivide[i];
  let index = 0;
  const subarrays = originalArray.map(() => {
    const subarray = originalArray.slice(index, index + elementsPerArray);
    index += elementsPerArray;
    return subarray;
  });

  result[keys[i]] = subarrays;
}

for (const key in result) {
  result[key] = result[key].slice(0, numberOfSubarraysToKeep);
}
   
  const prepWeatherArrays = []
  for(let i=0;i<7;i++) {
  const object = {
    time: new Date(daily.time[i]).toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"}).split(','),
    temperature_2m_max: daily.temperature_2m_max[i],
    temperature_2m_min: daily.temperature_2m_min[i],
    apparent_temperature_max: daily.apparent_temperature_max[i],
    apparent_temperature_min: daily.apparent_temperature_min[i],
    rain_sum: daily.rain_sum[i]+" mm",
    showers_sum: daily.showers_sum[i],
    snowfall_sum: daily.snowfall_sum[i],
    sunrise: new Date(daily.sunrise[i]).getHours() + `:` + String(new Date(daily.sunrise[i]).getMinutes()).padStart(2, "0"),
    sunset: new Date(daily.sunset[i]).getHours() + `:` + String(new Date(daily.sunset[i]).getMinutes()).padStart(2, "0"),
    cloudcover: result.cloudcover[i],
    weathercode: result.weathercode[i],
    surface_pressure: result.surface_pressure[i], 
    apparent_temperature: result.apparent_temperature[i],
    windspeed_10m: result.windspeed_10m[i]
}
    prepWeatherArrays.push(object)
    if(i===0) {
      prepWeatherArrays[0].current_weather = weatherDatas.current_weather
    } else {
      prepWeatherArrays[i].predicted_temperature = Math.round((daily.temperature_2m_max[i] + daily.temperature_2m_min[i])/2)
      prepWeatherArrays[i].predicted_pressure = Math.round(result.surface_pressure[i].reduce((el,acc) => el + acc)/24)
    }
  }
  return prepWeatherArrays;
  } 

  onLocationSearchInputChange = async (event) => { // wywołane przy zmianach w polu input wprowadzonych przez użytkownika. Wykonanie żądania do serwera o sugestie dotyczące wprowadzonego przez użytkownika słowa
    const response = await fetch('http://localhost:3600/suggestions', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      body: JSON.stringify({
        input: event.target.value
      }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await response.json()
    this.setState({pacSuggestions: data, locationSearchInput: event.target.value})
  }

  onPacElementClick = (event) => {
    const locationName = event.target.attributes.name.value;
    this.setState({
      locationSearchInput: locationName
    }, this.onLocationSearchInputSubmit)
  }

  onLocationSearchInputSubmit = async () => { //Wywołwany po naciśnięciu przycisku Search.
    const searchInput = document.querySelector('.pac-target-input');
    searchInput.value=""
    const response = await fetch('http://localhost:3600/initCurrentUserGeoPosition', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({
          locationName: this.state.locationSearchInput
        }),
        headers: {"Content-Type": "application/json"}
      })
      const locationRes = await response.json();
      const preparedWeather = await this.prepareWeathersDataForCardComponents(locationRes.currentWeather)
      if('error' in locationRes) {
        console.log(locationRes)
      } else {
        const { city, country } = locationRes;
        this.setState({
          locationSearchInput: "",
          currentLocation: [{
            city: city,
            country: country
          }],
          currentWeather: preparedWeather,
          pacSuggestions: []
        })  
      }
  }

  initCurrentUserPositionLoad = async ({coords}) => { //Inicjalizacji początkowej lokalizacji użytkownika oraz żądanie do serwera po dane pogodowe dla lokalizacji
    const { latitude, longitude } = coords;
      const response = await fetch('http://localhost:3600/initCurrentUserGeoPosition', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({
          latitude: latitude,
          longitude: longitude
        }),
        headers: {"Content-Type": "application/json"}
      })
      const {city, country, currentWeather} = await response.json();
      const preparedWeather = await this.prepareWeathersDataForCardComponents(currentWeather)
      this.setState(
        {
          currentLocation: [{
            city: city,
            country: country,
          }],
          currentWeather: preparedWeather
        })
  }

  componentDidMount() {  
    const errorCallback = error => {
      console.log(error)
    }
    navigator.geolocation.getCurrentPosition(this.initCurrentUserPositionLoad, errorCallback); // Pobranie z API geo lokacji szer i dł geografivznej pozycji u żytkownika. Wywołanie funkcji
  }

  render() {
      return this.state.currentLocation.length === 0  && this.state.currentWeather ?
      <h1>Loading</h1>
      : 
    <React.Fragment>
      <Navbar
        inputChange={this.onLocationSearchInputChange} 
        submitLocationSearch={this.onLocationSearchInputSubmit} 
        pac={this.state.pacSuggestions}
        onPacClick={this.onPacElementClick}
      />
      <WeatherSection city={this.state.currentLocation} weather={this.state.currentWeather} />
    </React.Fragment>
  }
}

export default App;
