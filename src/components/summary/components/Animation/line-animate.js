import React from 'react';

import './line-animate.css'

export default ({percent,label,className})=>{

    return <div className='line-animate-container'>
    <label>{label}</label>
    <div className={`mt-3 percentage-container`}>
        <div className={`${className} level-line animatable-line`}></div>
    </div>
    </div>
}