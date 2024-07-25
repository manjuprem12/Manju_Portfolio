/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import './Certifications.css'
// import { CgArrowsExpandUpRight } from 'react-icons/cg';
import course_data from './data/courses-data.json';

export default () => {
    return <div className='certification-section'>
        <ul>
            {course_data.map((item, index) =>
                <li key={index}>
                    
                    <div className='course-container d-flex gap-4 gap-md-5'>
                        <div className='make-opacity udemy-logo'>
                            <img src={`media/certificates/udemy.png`} height="100" width="100" />
                        </div>
                        <div>
                            <div className='make-opacity fs-6'>
                                <h1 className='fs-6 course-title'>{item.course}</h1>
                                <p>{item.organization}</p>
                                <p>{item.date}</p>
                            </div>
                            <a target="_blank" href={item.credentials}>
                                <button className='mt-3 credentials-button'>
                                    Show credentials &nbsp;
                                    {/* <CgArrowsExpandUpRight /> */}
                                </button> 
                            </a>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    </div>
}