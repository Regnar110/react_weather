import React from 'react';
import { useEffect } from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import '../styles/navigationbar.scss'

const NavigationBar = () => {

    useEffect(() => {
        console.log(`halo`)
      }, []);
    const socialIcons = [
        {
            name: "Github",
            iconType: "fa-github",
            iconHref: "https://github.com/Regnar110",
            size: "2xl"
        },
        {
            name: "Facebook",
            iconType: "fa-facebook",
            iconHref: "www.facebook.com",
            size: "2xl"
        },
        {
            name: "Instagram",
            iconType: "fa-instagram",
            iconHref: "www.instagram.com",
            size: "2xl"
        }
    ]
    
    return(
        <div className='site-navigation'>
            <h1 id="site-header">Check your weather!</h1>
            {
                socialIcons.map((el, i) => <FontAwesomeIcon key={i} {...el}/>)
            }
        </div>
    )
}

export default NavigationBar;