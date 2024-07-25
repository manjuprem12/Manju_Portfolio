import React from 'react';
import './button.css';
// import { AiOutlineArrowLeft } from 'react-icons/ai';

export default ({ className, onClick, children }) => {
    return (
        <button
            className={`style-button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
