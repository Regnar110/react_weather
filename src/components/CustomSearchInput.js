import React from 'react';
import '../styles/customInput.scss';

const CustomSearchInput = (props) => {
    const {data} = props.pac
    if(data) {
      const pacElements = data.map(el => el.split(",")); 
      console.log(pacElements) 
    }
    
    
    return(
        <div className='pac-input'>
            <input className='pac-target-input' type='text' onChange={props.onChange} />
            <div className='pac-dropdown'>
                {
                    data ? 
                        data.map(el => el.split(",")).map((el, i) => 
                            <div className='pac-element' value={el[0]} key={i}>
                                <i className="fa-solid fa-location-pin fa-xs"></i>
                                {el[0]}, <span>
                                    {`${el[1]} ${el[2]? `, ${el[2]}`:''}`}
                                    </span>
                            </div>)
                        :
                        undefined
                }
                
            </div> 
        </div>
        
    )
}

export default CustomSearchInput;