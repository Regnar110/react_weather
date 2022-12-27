import React from 'react';
import '../styles/siteheader.scss'

const SiteHeader = ({head}) => {
    return(
        <h1 id='site-header'>{head}</h1>
    )
}

export default SiteHeader;