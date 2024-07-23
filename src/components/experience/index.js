import './index.css'

import React, { useCallback, useEffect } from 'react'
import { entries } from 'lodash'


const experience_data = [
    {
        "position":"Software Intern",
        "company":"DCT Academy (Jan 2019-Jun 2019)",
        "location":"Bangalore",
        "className":"associate"
    },
    {
        "position":"Software Engineer",
        "company":"ACIS India Development Center Pvt Ltd (July 2019-Nov 2021)",
        "location":"Bangalore",
        "className":"pa"
    },
    {
        "position":"Programmer Analyst",
        "company":"Cognizant Technology Solutions (Nov 2021-Dec 2023)",
        "location":"Bangalore",
        "className":"pa"
    },
    {
        "position":"Frontend Developer",
        "company":"Therapielnd (Feb 2024-Apr 2024)",
        "location":"Amsterdam",
        "className":"pat"
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    let a = []
    experience_data.forEach(item => {
        a.push(...[item, { empty: true }])
    })
    let count = 4
    a = a.map((item, index) => {

        if (count === 4 && index > 1) {
            item.oddcards = "odd-cards"
            count = 0
        }
        if (index > 1) count += 1
        return item
    })



    const billa = (e, observe) => {
        const ele = document.querySelectorAll(".animatable")
        let a = [...ele].forEach((item) => {
            if (e === "add") item.classList.add("pause-animation-experience")
            else item.classList.remove("pause-animation-experience")
        })
    }

    const callback = useCallback((entries, observer) => {
        const entry = entries[0]

        if (entry.isIntersecting) {
            billa("removed")
            observer.unobserve(entry.target)
            console.log("olaaaaaaaaaaaaaaa", entry)

        }

    }, [])

    useEffect(() => {
        billa("add")
        let options = {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 0.4,
        };

        let observer = new IntersectionObserver(callback, options);
        let target = document.querySelector(".observe-experience");
        observer.observe(target);

        return () => observer.unobserve(target)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div id="Experience" className='experience-section-head'>
        <h6 className='text-center fw-light pink-color'>-- 4+ years of Experience --</h6>
        <h1 className='text-center mb-5'>Career</h1>
        <div className='experience-section'>
            <ul className="observe-experience d_grid_exp">
                {
                    a.map((item, index) => {
                        return !item.empty ? <li key={index} className={`exp-card-joiner ${item.oddcards ? "odd-cards" : ""}`}>
                            <span className="color-point"></span>


                            <div className={`animatable horizonal-line ${item.className}`}></div>
                            <div className={`animatable vertical-line1 ${item.className}`}></div>
                            <div className={`animatable circle-line ${item.className}`}></div>
                            <div className={`animatable vertical-line2 ${item.className}`}></div>

                            <div className='exp-card'>
                                <div className={`animatable magic-colors opacity-less ${item.className} d-flex flex-wrap align-items-center justify-content-center gap-5`}>
                                    <div>
                                        <h1 className='fs-5'>{item.position}</h1>
                                        <p>{item.company}</p>
                                    </div>
                                    <span className='location'>{item.location}</span>
                                </div>
                            </div>
                        </li> : <li key={index} className="exp-card-joiner"></li>

                    })
                }
            </ul>
        </div>
    </div>
}