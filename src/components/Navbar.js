import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,

} from 'react-icons/fa';
import './Navbar.css'
import Button from '../button';

import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight
} from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
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



export default function Navbar() {
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

  return (
    <div>
      <header className="bg-gray-800 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Reed Barger
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              Past Work
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Courses
            </a>
            <a href="#testimonials" className="mr-5 hover:text-white">
              Testimonials
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Hire Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
        {/* <div className='d-lg-flex position-fixed flex-column social-icons-head start-0'>
        <ul className='social-icons'>
          <li className='p-0 bg-transparent arrow-bar d-flex justify-content-around align-items-center'>
            <Button
              className={`not-show  d-flex justify-content-between align-items-center`}
              onClick={() => setMenu(prev => !prev)}
            >
              <AiOutlineArrowLeft className={`${Menu ? "rotate-button" : ""}`} size={20} />
            </Button>
          </li>

          {
            social_data.map((item, index) =>
              <li style={{ translate: Menu && "-1000px 0px" }} className={`p-2 ${item.media} d-flex justify-content-between align-items-center`} key={index}>
                <a
                  className='d-flex justify-content-around align-items-center w-100 text-white fw-bold'
                  href={item.media === "Email" ? "#" : item.link}
                  onClick={item.media === "Email" ? handleGmailButtonClick : () => { }}
                  target="_blank"
                  download={item.media === "Resume" ? "Manju_Prem_Resume.pdf" : undefined}
                >
                  {item.media}
                  {item.media === "Linkedin" && <FaLinkedin size={30} />}
                  {item.media === "Github" && <FaGithub size={30} />}
                  {item.media === "Email" && <HiOutlineMail size={30} />}
                  {item.media === "Resume" && <BsFillPersonLinesFill size={30} />}
                </a>
              </li>

            )
          }
        </ul>
      </div> */}
      </header>
      
    </div>
  );
}


