import React, {Component} from 'react';
import '../styles/App.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weatherObject:[]
    }
  }

  componentDidMount() {  
    const successCallback = position => {
      console.log(position)
    }

    const errorCallback = error => {
      console.log(error)
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback); // getting lat/lon geo position for initiated app user position. 
    // tu należy wykonać kolejny kod tzw odwróconej geolokacji z google API.
    const connectIt = async () => {
      const response = await fetch('http://localhost:3600/appmount', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
      })
      const parse = await response.json();
      console.log(parse);
    }
    connectIt();
    // setTimeout(() => {
    //   fetch("http://dataservice.accuweather.com/locations/v1/search?q=warszawa&apikey=VoGmC6YG0p3lmNnrcIIVfKbZTdc9dUmp")
    //   .then(response => response.json()).then(response => fetch(`http://dataservice.accuweather.com/currentconditions/v1/${response[0].Key}?apikey=VoGmC6YG0p3lmNnrcIIVfKbZTdc9dUmp&details=true`)
    //     .then(response => response.json())
    //     .then(response => {
    //       console.log(response[0])
    //       this.setState({weatherObject:response[0]})
    //     }));
    // }, 4000)
  }

  render() {
    return this.state.weatherObject.length === 0 ? <h1>Loading</h1>: <h1>Ready</h1>; // gdy weatherObject jest zapełniony po metodzie fetch wyświetla weather Ready
  }
}

export default App;
