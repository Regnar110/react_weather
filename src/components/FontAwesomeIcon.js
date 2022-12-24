import React from 'react';
import '../styles/fontAwesomeIcon.scss'

const FontAwesomeIcon = (props) => {
    return(
        <div className='fa-icon'>
            <a className='fa-icon-href' href={props.iconHref}><i className={`fa-brands ${props.iconType} fa-${props.size}`}/></a>
            {props.name}
        </div>
    )
}

export default FontAwesomeIcon;