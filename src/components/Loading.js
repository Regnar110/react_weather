import React from "react";
import "../styles/loading.scss"
import { ReactComponent as CloudSvg } from '../assets/loading/result.svg';

const Loading = () => {
    return(
        <div className="loading_container">
            <div className="cloud">
                <CloudSvg />
            </div>
            <div className="loading_desc">
                <span>Looking outside for you.</span>
                <span>Wait for me!</span>
            </div>
        </div>
    )
}

export default Loading;