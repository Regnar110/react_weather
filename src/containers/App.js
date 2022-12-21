import React, {Component} from 'react';
import LocationSearch from '../components/LocationSearch';
import '../styles/App.scss';

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
    this.setState({pacSuggestions: data, locationSearchInput: event.target.value}, () => console.log(this.state.pacSuggestions))
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
    console.log(`state city is: ${this.state.locationSearchInput}`)
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
        console.log(city, country, currentWeather)
        this.setState({
          locationSearchInput: "",
          currentLocation: [{
            city: city,
            country: country
          }],
          currentWeather: currentWeather,
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
    navigator.geolocation.getCurrentPosition(this.initCurrentUserPositionLoad, errorCallback); // Pobranie z API geo lokacji szer i dł geografivznej pozycji u żytkownika. Wywołanie funkcji
  }

  render() {
    return this.state.currentLocation.length === 0  && this.state.currentWeather ?
      <h1>Loading</h1>
    : 
    <React.Fragment>
      <LocationSearch
        inputChange={this.onLocationSearchInputChange} 
        submitLocationSearch={this.onLocationSearchInputSubmit} 
        pac={this.state.pacSuggestions}
        onPacClick={this.onPacElementClick}
      />
    </React.Fragment>
  }
}

export default App;
