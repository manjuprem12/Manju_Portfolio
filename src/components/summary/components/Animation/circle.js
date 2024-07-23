import React from 'react';


export const Circle= ({className,progresslevel})=>  <svg 
 version="1.1" className={className} xmlns="http://www.w3.org/2000/svg"  
 xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 0 131.45 131.451"  >  

<defs>
    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#ef4444" />
      <stop offset="50%" stopColor="#ec4899" />
      <stop offset="100%" stopColor="#2563eb" />
    </linearGradient>
  </defs>
  
<circle  transform="rotate(-90 70 70)" cx="70" cy="70" r="55" fill="none" stroke="#3e4143"
strokeWidth="7" strokeDasharray="0" strokeDashoffset="0" >
</circle>

<circle  className={`animate-circle animatable-circle ${className}`} transform="rotate(-90 70 70)"  cx="70" cy="70" r="55" fill="none"
 stroke="url(#circleGradient)"
 strokeWidth="7"  strokeDasharray="360" >



</circle>
</svg>