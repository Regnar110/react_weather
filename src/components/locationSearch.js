import React, {Component} from 'react';
import '../styles/locationsearch.scss';
import Autocomplete from "react-google-autocomplete";
import CustomButton from './CustomButton.js'

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoCompleteArray: [
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
                {
                    city: "Gdańsk",
                    country: "Poland"
                },
            ],
            isAutoCompleteOpen: false
        }
    }

    render() {
        return(
        <nav className='top-fixed-nav'>
            <div className='nav'>
                social
                social
                social
            </div>
            <div className='searchField'>
                <div className='inputAndSubmit'>
                    <Autocomplete
                        onChange={this.props.inputChange}
                        apiKey={'AIzaSyB4pdAcpJJlCaPXmD-7_417eA-N3u5-3L0'}
                        onPlaceSelected={this.props.dropdownChange}
                    />;
                    <CustomButton type='submit' text='Search' eventHandler={this.props.submitLocationSearch} />
                </div>
            </div>
        </nav>
        )
    }
}

export default LocationSearch;

//https://developers.google.com/maps/documentation/javascript/place-autocomplete