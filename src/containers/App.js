import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/App.scss';
import WeatherSection from './WeatherSection.js';
import Loading from '../components/Loading.js'

//FUNCTIONALITIES
import prepareWeathersDataForCardComponents from '../appFunctionalities/prepareWeatherDatas.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      locationSearchInput: "",
      currentLocation: [],
      currentLocationTime: '',
      currentWeather: [],
      pacSuggestions: []
    }
  }

  onLocationSearchInputChange = async (event) => { // wywołane przy zmianach w polu input wprowadzonych przez użytkownika. Wykonanie żądania do serwera o sugestie dotyczące wprowadzonego przez użytkownika słowa
    const response = await fetch('https://reactweatherserverapi.ey.r.appspot.com/suggestions', {
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

  onPacElementClick = (event) => { // funkcja  wywoływana na kliknięcie elementu w rozwijanym menu sugestii.
    const locationName = event.target.attributes.name.value;
    this.setState({
      locationSearchInput: locationName
    }, this.onLocationSearchInputSubmit)
  }

  onLocationSearchInputSubmit = async () => { //Wywołwany po naciśnięciu przycisku Search.
    const searchInput = document.querySelector('.pac-target-input');
    searchInput.value="" // czyszczenie pola input po naciśnięciu przycisku wywołującego funkcję
    const response = await fetch('https://reactweatherserverapi.ey.r.appspot.com/initCurrentUserGeoPosition', { // tworzenie obietnicy - metoda POST, poprzez body request
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({
          locationName: this.state.locationSearchInput
        }),
        headers: {"Content-Type": "application/json"}
      })
      const locationRes = await response.json();
      const preparedWeather = await prepareWeathersDataForCardComponents(locationRes.currentWeather)
      if('error' in locationRes) {
        console.log(locationRes)
      } else {
        const { city, country, currentLocationTime } = locationRes;
        this.setState({
          locationSearchInput: "",
          currentLocation: [{
            city: city,
            country: country
          }],
          currentLocationTime: currentLocationTime,
          currentWeather: preparedWeather,
          pacSuggestions: []
        })  
      }
  }

  initCurrentUserPositionLoad = async ({coords}) => { //Inicjalizacji początkowej lokalizacji użytkownika oraz żądanie do serwera po dane pogodowe dla lokalizacji
    //obiekt coords otrzymywany jest z API navigator.geolocation.getCurrentPosition
    const { latitude, longitude } = coords;
    try {
      console.log('try')
      const response = await fetch('https://reactweatherserverapi.ey.r.appspot.com/initCurrentUserGeoPosition', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({
          latitude: latitude,
          longitude: longitude
        }),
        headers: {"Content-Type": "application/json"}
      })
      const {city, country, currentWeather, currentLocationTime} = await response.json();
      const preparedWeather = await prepareWeathersDataForCardComponents(currentWeather) // przekazanie odpowiedzi z serwera funkcji prepareWeathersDataForCardComponent, która zwróci
      // przygotowaną tablicę z obiektami pogodowymi reprezentującymi każdy z 7 dni.
      this.setState(
        {
          currentLocation: [{
            city: city,
            country: country,
          }],
          currentLocationTime: currentLocationTime,
          currentWeather: preparedWeather
        })
    } catch(err) {
      console.log(err)
    }
  }

  componentDidMount() {  
    const errorCallback = error => {
      console.log(error)
      this.initCurrentUserPositionLoad({coords: {
        latitude: 52.237049,
        longitude: 21.017532
      }
      })
    }
    navigator.geolocation.getCurrentPosition(this.initCurrentUserPositionLoad, errorCallback); // Pobranie z API geo lokacji szer i dł geografivznej pozycji u żytkownika. Wywołanie funkcji
  }

  render() {
      return this.state.currentLocation.length === 0  && this.state.currentWeather ?
      <Loading />
      : 
    <React.Fragment>
      <Navbar
        inputChange={this.onLocationSearchInputChange} 
        submitLocationSearch={this.onLocationSearchInputSubmit} 
        pac={this.state.pacSuggestions}
        onPacClick={this.onPacElementClick}
      />
      <WeatherSection city={this.state.currentLocation} weather={this.state.currentWeather} currentLocationTime={this.state.currentLocationTime} />
    </React.Fragment>
  }
}

export default App;
