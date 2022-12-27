import React from 'react';
import '../styles/customInput.scss';

const CustomSearchInput = ({pac, inputValue, onChange, onPacClick}) => {
    const {data} = pac    
    return(
        <div className='pac-input'>
            <input className='pac-target-input' type='text' value={inputValue} onChange={onChange} placeholder='enter the name of the city'/>
            <div className='pac-dropdown'>
                {
                    data ? 
                        data.map((el, i) => {
                            const slicedElements = el.slice(0, 3)
                                return (
                                    <div className='pac-element' key={i}>
                                        <i className="fa-solid fa-location-pin fa-xs"/>
                                        <div className='pac-city-name' name={slicedElements[1]} onClick={onPacClick}>{slicedElements[0]}</div>
                                    </div>
                                )
                            
                        })
                        :
                        undefined
                }
                
            </div> 
        </div>
        
    )
}

export default CustomSearchInput;