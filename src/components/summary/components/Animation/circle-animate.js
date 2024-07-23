import React from 'react';

import { Circle } from './circle'
import './circle-animate.css'

export default ({ title, level, className }) => {
    return (
        <div>
            <label className='d-block'>{title}</label>
            <div className='circle-percent-value'>
                <span className={`${className}_word fw-bold ms-2 fs-5 animatable-circle`}>{level}%</span>
                <Circle className={className} progresslevel={level}></Circle>
            </div>
        </div>
    )
}