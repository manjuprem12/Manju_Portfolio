import React, { useState } from 'react'
import './index.css';
import Button from '../button'

export default () => {


    const [state,setState]=useState(true)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    return <div className={`site-quote w-100 align-items-center justify-content-between mx-2 ${state?"show":''}`}>
            <div className='sentences d-flex align-items-center justify-content-center gap-2 flex-grow-1 text-white-50 text-center'>
            <div class="wrapper">
                <h1>Give Me Chance --- Inreturn -- I will Give My Prime</h1>
                </div>
       
            </div>
            <Button className='dont-up close-button-title px-2' onClick={()=>{
                setState(false)
            }}>
                X
            </Button>
    </div>
}
