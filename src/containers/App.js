import React, {Component} from 'react';
import LocationSearch from '../components/LocationSearch';
import '../styles/App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      locationSearchInput: "",
      currentLocation: [],
      currentWeather: []
    }
  }

  onEnterInputSubmit = (event) => {
    return event.key === 'Enter' ? this.onLocationSearchInputSubmit() : null;
  }
  
  onDropdownSearchInputChange = (place) => {
    console.log(place)
    this.setState({locationSearchInput: place.address_components[0].long_name})
  }

  onLocationSearchInputChange = (event) => {
    this.setState({locationSearchInput: event.target.value})
  }

  onLocationSearchInputSubmit = async () => {
    console.log(this.state.locationSearchInput)
    const response = await fetch('http://localhost:3600/initCurrentUserGeoPosition', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({
          locationName: this.state.locationSearchInput
        }),
        headers: {"Content-Type": "application/json"}
      })
      const locationRes = await response.json();
      if('error' in locationRes) {
        console.log(locationRes)
      } else {
        const { city, country, currentWeather } = locationRes;
        console.log({
          city:city,
          country: country,
          weather: currentWeather
        })
        this.setState({
          currentLocation: [{
            city: city,
            country: country
          }],
          currentWeather: currentWeather
        })  
      }

  }

  initCurrentUserPositionLoad = async ({coords}) => {
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
      console.log( city, country, currentWeather)
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
      <LocationSearch inputValue={this.state.locationSearchInput} inputChange={this.onLocationSearchInputChange} submitLocationSearch={this.onLocationSearchInputSubmit} dropdownChange={this.onDropdownSearchInputChange}/>
    </React.Fragment>
  }
}

export default App;
