import React from 'react';
import './styles/PageError.css';
import ImgError from '../images/PageError.png';

function PageError (props){
return (
    <div className="PageError">
        <img className="img-Error" src={ImgError} alt="Error" ></img>
        {props.error.message}
        </div>
)

}

export default PageError;