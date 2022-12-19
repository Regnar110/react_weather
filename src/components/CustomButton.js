import React from 'react';
import '../styles/custombutton.scss'

const CustomButton = (props) => {
    const {type, text, eventHandler} = props;
    return (
        <button id='customButton' type={type} onClick={eventHandler}>{text}</button>
    )
}

export default CustomButton;