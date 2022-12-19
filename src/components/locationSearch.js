import React from 'react';
import '../styles/locationsearch.scss';

const LocationSearch = (props) => {
    return(
        <nav className='top-fixed-nav'>
            <div className='nav'>
                social
                social
                social
            </div>
            <div className='searchField'>
                 <input id='locationSearchBox' list='locations' type='text' placeholder='city name' onChange={props.inputChange}></input>
                 <datalist className="searchLocationsDatas" id='locations'>
                    <option>Gdańsk</option>
                 </datalist>
                <button id='locationSearchSubmitButton' type='submit' onClick={props.submitLocationSearch}>Search</button>
            </div>
        </nav>
           
    )
}

export default LocationSearch;

//https://developers.google.com/maps/documentation/javascript/place-autocomplete