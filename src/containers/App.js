import React, {Component} from 'react';
import LocationSearch from '../components/LocationSearch';
import '../styles/App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentLocation: [],
      currentWeather: []
    }
  }

  initCurrentUserPositionLoad = async ({coords}) => {
    console.log(coords)
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

  componentDidMount() {  
    const errorCallback = error => {
      console.log(error)
    }
    navigator.geolocation.getCurrentPosition(this.initCurrentUserPositionLoad, errorCallback); // getting lat/lon geo position for initiated app user position. 
  }

  render() {
    return this.state.currentLocation.length === 0  && this.state.currentWeather ?
      <h1>Loading</h1>
    : 
    <React.Fragment>
      <LocationSearch />
    </React.Fragment>
  }
}

export default App;
