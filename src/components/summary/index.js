// import Skills from './components/skills'
// import Education from './components/Education'
// import Certificate from './components/Certifications'

// import React, { useState } from 'react'
// import './index.css'

// // eslint-disable-next-line import/no-anonymous-default-export
// export default ()=>{
//     const [state,setState]=useState("skills")

//     return <div id="Summary" className='summary-section'>
//         <h6 className='text-center fw-light pink-color'>-- skills & education --</h6>
//         <h1 className='text-center mb-5'>My Resume</h1>
//         <div className="summary-select flex-wrap d-flex align-items-center">
//             <button onClick={()=>setState("skills")} className={`customize-button flex-grow-1 ${state==="skills" ? "active_summary":""}`}>Skills</button>
//             <button onClick={()=>setState("certificates")} className={`customize-button flex-grow-1 ${state==="certificates" ? "active_summary":""}`}>Certificates</button>
//             <button onClick={()=>setState("education")} className={`customize-button flex-grow-1 ${state==="education" ? "active_summary":""}`}>Education</button>
//         </div>
//         <div className="summary-loader">
//             {state==="skills" && <Skills />}
//             {state==="certificates" && <Certificate />}
//             {state==="education" && <Education />}
//         </div>
//     </div>
// }

import Skills from './components/skills';
import Education from './components/Education';
import Certificate from './components/Certifications';

import React, { useState } from 'react';
import './index.css'; // Ensure this CSS file does not override Tailwind styles

export default () => {
    const [state, setState] = useState("certificates");

    return (
        <div id="Summary" className='summary-section'>
            <h6 className='text-center font-light text-pink-500'>-- skills & education --</h6>
            <h1 className='text-center mb-5'>My Resume</h1>
            <div className="summary-select flex-wrap flex">
                {/* <button onClick={() => setState("skills")} className={`customize-button flex-grow ${state === "skills" ? "active_summary" : ""}`}>Skills</button> */}
                <button onClick={() => setState("certificates")} className={`customize-button flex-grow ${state === "certificates" ? "active_summary" : ""}`}>Certificates</button>
                <button onClick={() => setState("education")} className={`customize-button flex-grow ${state === "education" ? "active_summary" : ""}`}>Education</button>
            </div>
            <div className="summary-loader">
                {/* {state === "skills" && <Skills />} */}
                {state === "certificates" && <Certificate />}
                {state === "education" && <Education />}
            </div>
        </div>
    );
};
