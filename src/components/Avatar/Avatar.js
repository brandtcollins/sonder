import React from 'react';
import './Avatar.css'
;
function Avatar(){
    return (
        <img src={process.env.PUBLIC_URL + '/images/Sonder_Logo.svg'} alt="Sonder Logo" className="avatar"/>
    );
}

export default Avatar;