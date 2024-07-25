
import React, {useState} from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/solid";

// import {
//   FaBars,
//   FaTimes,
//   FaGithub,
//   FaLinkedin,

// } from 'react-icons/fa';
import './index.css'
import Button from '../button';

// import {
//   AiOutlineArrowLeft,
//   AiOutlineArrowRight
// } from 'react-icons/ai'
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const social_data = [
  {
    "media": "Linkedin",
    "link": "https://www.linkedin.com/in/manju-prem-272093b7"
  },
  {
    "media": "Github",
    "link": "https://github.com/manjuprem12"
  },
  {
    "media": "Email",
    "link": "https://mail.google.com/mail/?view=cm&fs=1&to=manjupremp@gmail.com"

  },
  {
    "media": "Resume",
    "link": "Manju_Prem_Resume.pdf"
  }
]

export default function About() {

  const [Menu, setMenu] = useState(false);


  const handleGmailButtonClick = () => {
    let mobile_link = "mailto:manjupremp@gmail.com"

    if (isMobile) {
      // Open Gmail app
      window.open(mobile_link);
    } else {
      // Open Gmail website with pre-filled "to" email
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=manjupremp@gmail.com');
    }
  };

  console.log('social_data', social_data)
  return (
    <section id="about">
        <div className='lg:flex fixed flex-col social-icons-head left-0 top-1/3'>
            <ul className='social-icons'>
                <li className='p-0 bg-transparent arrow-bar flex justify-around items-center'>
                    <button
                        className={`not-show flex justify-between items-center ${Menu ? 'rotate-180' : ''}`}
                        onClick={() => setMenu(prev => !prev)}
                    >
                       <ArrowLeftIcon className={`${Menu ? "w-5 h-5 rotate-button" : "w-5 h-5"}`} />

                    </button>
                </li>
                {
                    social_data.map((item, index) => (
                        <li 
                            style={{ transform: Menu ? 'translateX(-1000px)' : 'translateX(0)' }}
                            className={`p-2 ${item.media.toLowerCase()} flex justify-between items-center`} 
                            key={index}
                        >
                            <a
                                className='flex justify-around items-right w-full text-white font-bold'
                                href={item.media === "Email" ? "#" : item.link}
                                onClick={item.media === "Email" ? handleGmailButtonClick : () => {}}
                                target="_blank"
                                download={item.media === "Resume" ? "Manju_Prem_Resume.pdf" : undefined}
                            >
                                {item.media}

                                {/* {item.media === "Linkedin" &&   }

                                {item.media === "Linkedin" && <FaLinkedin size={30} />}
                                {item.media === "Github" && <FaGithub size={30} />}
                                {item.media === "Email" && <HiOutlineMail size={30} />}
                                {item.media === "Resume" && <BsFillPersonLinesFill size={30} />} */}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Manju.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Transforming Ideas into Interactive Digital Realities: 
          A Journey Through My Passion for Frontend Development,
          Merging Aesthetic Design with Robust Code to Create Engaging and Intuitive User Experiences.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}