
// import React, { useEffect,useCallback } from 'react'
// import './skills.css'
// import LineAnimate from './Animation/line-animate'
// import CircleAnimate from './Animation/circle-animate'
// import professionalskill_data from './data/professionalskill-data.json'
// import technicalskill_data from './data/technicalskill-data.json'


// export default ()=>{

//     useEffect(()=>{

//         const ele=document.querySelector(".skills-section")

//         technicalskill_data.forEach((item)=>{
//             ele.style.setProperty(`--${item.className}-percent`,item.percent+"%")
//         })
//         professionalskill_data.forEach((item)=>{
//             let newvalue=(360-(360*item.level/100))
//             ele.style.setProperty(`--${item.className}-percent`,newvalue)
//         })
//     },[])

//     const billa=(e)=>{
//         const ele=document.querySelectorAll(".animatable-line")
//         let a=[...ele].forEach((item)=>{
//            if(e==="add") item.classList.add("pause-animation-line")
//            else item.classList.remove("pause-animation-line")
//         })
//     }
//     const jilla=(e)=>{
//         const ele=document.querySelectorAll(".animatable-circle")
//         let a=[...ele].forEach((item)=>{
//            if(e==="add") item.classList.add("pause-animation-circle")
//            else item.classList.remove("pause-animation-circle")
//         })

//     }
    
//     useEffect(()=>{
//         jilla("add")    
//         let observer = new IntersectionObserver((entries,observer)=>{
//         if (!entries[0].isIntersecting)return
//         jilla("removed")
//         observer.unobserve(entries[0].target)
//     }, {
//         root: document.querySelector("#scrollArea"),
//         rootMargin: "0px",
//         threshold: 0.3,
//       });
//       let target= document.querySelector(".observe-summary-circle");
//       observer.observe(target);

//     return ()=>{
//         observer.unobserve(target);
//     }
//     },[])


//     useEffect(()=>{
//         billa("add")    
//             let observer = new IntersectionObserver((entries,observer)=>{
//             if (!entries[0].isIntersecting)return
//             billa("removed") 
//             observer.unobserve(entries[0].target)  
//           }, {
//             root: document.querySelector("#scrollArea"),
//             rootMargin: "0px",
//             threshold: 0.3,
//           });
//           let target= document.querySelector(".observe-summary-line");
//           observer.observe(target);
    
//         return ()=>{
//             observer.unobserve(target)
//         }
//     },[])



//     return <div className="pt-4 skills-section d-md-flex ">
//             <div className='pt-4 technical-skills flex-grow-1'>
//                 <h6 className='mx-auto text-width-fit'>Technical skills</h6>
//                 <ul className="observe-summary-line">
//                     {
//                         technicalskill_data.map((item,index)=><li key={index}>
//                         <LineAnimate percent={item.percent} label={item.label} className={item.className} />
//                         </li>)}
                    
                   
//                 </ul>
//             </div>
//             <div className='pt-4 professional-skills flex-grow-1'>
//                  <h6 className='text-width-fit mx-auto mb-md-5'>Professional skills</h6>
//                     <ul className='d_grid observe-summary-circle'>
                   
//                    {professionalskill_data.map((item,index)=>
//                    <li key={index} className='d-flex align-items-center flex-column gap-3 justify-content-center'>
//                    <CircleAnimate title={item.title} level={item.level} className={item.className} />
//                    </li>
//                    )}
//                     </ul>
//             </div>
//     </div>
// }

import React, { useEffect } from 'react';
import './skills.css'; // Ensure this CSS file does not override Tailwind styles
import LineAnimate from './Animation/line-animate';
import CircleAnimate from './Animation/circle-animate';
import professionalskill_data from './data/professionalskill-data.json';
import technicalskill_data from './data/technicalskill-data.json';

const Skills = () => {
    useEffect(() => {
        // Code that sets custom properties or other styles
    }, []);

    const pauseLineAnimation = (toggle) => {
        const elements = document.querySelectorAll(".animatable-line");
        elements.forEach((item) => {
            if (toggle === "add") {
                item.classList.add("pause-animation-line");
            } else {
                item.classList.remove("pause-animation-line");
            }
        });
    };

    const pauseCircleAnimation = (toggle) => {
        const elements = document.querySelectorAll(".animatable-circle");
        elements.forEach((item) => {
            if (toggle === "add") {
                item.classList.add("pause-animation-circle");
            } else {
                item.classList.remove("pause-animation-circle");
            }
        });
    };

    useEffect(() => {
        pauseCircleAnimation("add");

        let observer = new IntersectionObserver((entries, observer) => {
            if (!entries[0].isIntersecting) return;
            pauseCircleAnimation("removed");
            observer.unobserve(entries[0].target);
        }, {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 0.3,
        });

        let target = document.querySelector(".observe-summary-circle");
        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, []);

    useEffect(() => {
        pauseLineAnimation("add");

        let observer = new IntersectionObserver((entries, observer) => {
            if (!entries[0].isIntersecting) return;
            pauseLineAnimation("removed");
            observer.unobserve(entries[0].target);
        }, {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 0.3,
        });

        let target = document.querySelector(".observe-summary-line");
        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, []);

    return (
        <div className="pt-4 skills-section flex">
            <div className='pt-4 technical-skills flex-grow'>
                <h6 className='mx-auto'>Technical skills</h6>
                <ul className="observe-summary-line">
                    {technicalskill_data.map((item, index) => (
                        <li key={index}>
                            <LineAnimate percent={item.percent} label={item.label} className={item.className} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pt-4 professional-skills flex-grow'>
                <h6 className='mx-auto mb-5'>Professional skills</h6>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 observe-summary-circle'>
                    {professionalskill_data.map((item, index) => (
                        <li key={index} className='flex items-center justify-center'>
                            <CircleAnimate title={item.title} level={item.level} className={item.className} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;
