import React from 'react';
import '../styles/custombutton.scss'

const CustomButton = ({type, text, eventHandler}) => {
    return (
        <button id='customButton' type={type} onClick={eventHandler}>{text}</button>
    )
}

export default CustomButton;