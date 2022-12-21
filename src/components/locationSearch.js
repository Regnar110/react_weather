import React, {Component} from 'react';
import '../styles/locationsearch.scss';
import CustomSearchInput from './CustomSearchInput';
import CustomButton from './CustomButton.js'

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <CustomSearchInput inputValue={this.props.inputValue} onChange={this.props.inputChange} pac={this.props.pac} onPacClick={this.props.onPacClick}/>
                    <CustomButton type='submit' text='Search' eventHandler={this.props.submitLocationSearch} />
                </div>
            </div>
        </nav>
        )
    }
}

export default LocationSearch;