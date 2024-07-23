/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import './Education.css'

import education_data from './data/education-data.json';

export default () => {
    education_data.map(item => console.log('item.logo', `media/educations/${item.logo}`))

    return <div className="education d-flex gap-3 gap-md-5">
        <ul>
            {education_data.map((item, index) =>
                <li key={index}>
                    <div className='education-container flex gap-3 gap-md-5'>
                        <div>
                            <img src={`media/educations/${item.logo}.jpeg`} height="100" width="100" />
                        </div>
                        <div>
                            <div className="flex-wrap flex align-items-center justify-content-center gap-5">
                                <div>
                                    <h1 className="fs-4">{item.course}</h1>
                                    <p className="fs-6">{item.organization}</p>
                                    <p>{item.location}</p>
                                </div>
                                <span className="rounded cgpa">{item.score}</span>
                            </div>
                            <div>
                                <div className="mt-5 acomplishments">
                                    <h2 className="fs-5">Accomplishments</h2>
                                    <p className="fs-6">{item.accomplishments}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
            )}
        </ul>
    </div>
}


// import React from 'react';
// import './Education.css'; // Custom CSS should be imported after Tailwind CSS
// import education_data from './data/education-data.json';

// const Education = () => {
//     return (
//         <div className="education grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <ul>
//                 {education_data.map((item, index) => (
//                     <li key={index} className="education-container flex gap-3 md:gap-5">
//                         <div>
//                             <img src={`media/educations/${item.logo}.jpeg`} height="100" width="100" alt={item.course} />
//                         </div>
//                         <div className="flex flex-col justify-between">
//                             <div className="flex flex-wrap items-center gap-5">
//                                 <div>
//                                     <h1 className="text-lg font-semibold">{item.course}</h1>
//                                     <p className="text-base">{item.organization}</p>
//                                     <p className="text-sm">{item.location}</p>
//                                 </div>
//                                 <span className="rounded bg-gray-200 px-2 py-1 text-sm">{item.score}</span>
//                             </div>
//                             <div className="mt-5">
//                                 <h2 className="text-base font-medium">Accomplishments</h2>
//                                 <p className="text-sm">{item.accomplishments}</p>
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Education;
