import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';
import '../styles/socialicons.scss'

const SocialIcons = () => {
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
            {
                socialIcons.map((el, i) => <FontAwesomeIcon key={i} {...el}/>)
            }
        </div>
    )
}

export default SocialIcons;