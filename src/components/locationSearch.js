import React from 'react';
import '../styles/locationsearch.scss';

const LocationSearch = (props) => {
    return(
        <div>
            <input type='text' placeholder='city name' onChange={props.inputChange}></input>
            <button type='submit' onClick={props.submitLocationSearch}>Submit data</button>
        </div>
    )
}

export default LocationSearch;