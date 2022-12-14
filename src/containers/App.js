import React, {Component} from 'react';
import '../styles/App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentLocation: [],
      weatherObject:[]
    }
  }

  handlePositionChange = async ({coords}) => {
    const { latitude, longitude } = coords;
      const response = await fetch('http://localhost:3600/geolocation', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        body: JSON.stringify({
          lat: latitude,
          lon: longitude
        }),
        headers: {"Content-Type": "application/json"}
      })
      const {city, country} = await response.json();
      console.log(city, country)
      this.setState({currentLocation: [{
        city: city,
        country: country
      }]})
  }
  componentDidMount() {  
    const errorCallback = error => {
      console.log(error)
    }
    navigator.geolocation.getCurrentPosition(this.handlePositionChange, errorCallback); // getting lat/lon geo position for initiated app user position. 
  }

  render() {
    return this.state.currentLocation.length === 0 ? <h1>Loading</h1>: <h1>Ready</h1>; // gdy weatherObject jest zapełniony po metodzie fetch wyświetla weather Ready
  }
}

export default App;
