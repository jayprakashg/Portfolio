import React, { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);
  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    toggleTheme();
  };

  return (
    <div className="menubar">
      <nav className="navbar">
        <div className='navbar-logo'>
          <svg width="30" height="30" viewBox="0 0 883 872" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M221 433.894L223.146 217L442 219.106V436L221 433.894Z" fill="var(--logo-sc)"/>
            <path d="M874 0H439L440 218.5H654L658 411C652 474 648.5 537.5 577.5 598.5C520.5 652 430 668 361 637C305.8 612.2 274.333 578 265.5 564C255.5 554.4 241.333 525.667 235.5 512C221.5 466.5 222.5 450 221.5 435H1.00001C6.31809e-06 442 4.00001 491.5 15.5 540.5C29.5 610.5 98.5 729.5 191.5 791C284.5 852.5 343.5 876 465 870.5C586.5 865 667.5 815.5 731.5 757.5C795.5 699.5 844.5 598.5 849 572C884 477.5 882.5 369 883 369C883 302.2 878.333 159.167 876 96L874 0Z" fill="var(--logo-j)"/>
          </svg>
        </div>
        <div className="rightNavBar">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div id="toggle" className={`changer ${isToggled ? 'change' : ''}`} onClick={handleToggle}>
            <span className={`changer ${isToggled ? 'change' : ''}`}>
              <i className={`fa-solid fa-cloud-moon moon changer ${isToggled ? 'change' : ''}`}>
              </i>
              <i className={`fa-solid fa-cloud-sun sun changer ${isToggled ? '' : 'change'}`}>
              </i>
            </span>
            {isToggled ? '' : ''}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
