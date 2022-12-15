import React, {Component} from 'react';
import '../styles/App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentLocation: [],
      currentWeather: []
    }
  }


  componentDidMount() {  
    const initCurrentUserPosition = async ({coords}) => {
      const { latitude, longitude } = coords;
        const response = await fetch('http://localhost:3600/initCurrentUserGeoPosition', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          body: JSON.stringify({
            lat: latitude,
            lon: longitude
          }),
          headers: {"Content-Type": "application/json"}
        })
        const {city, country, currentWeather} = await response.json();
        console.log(city, country, currentWeather)
        this.setState(
          {
            currentLocation: [{
              city: city,
              country: country,
            }],
            currentWeather: currentWeather
          })
    }
    const errorCallback = error => {
      console.log(error)
    }
    navigator.geolocation.getCurrentPosition(initCurrentUserPosition, errorCallback); // getting lat/lon geo position for initiated app user position. 
  }

  render() {
    return this.state.currentLocation.length === 0  && this.state.currentWeather ?
      <h1>Loading</h1>
    : 
      <h1>Ready</h1>; // gdy weatherObject jest zapełniony po metodzie fetch wyświetla weather Ready
  }
}

export default App;
