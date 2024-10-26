import React, { useEffect, useState } from 'react';
import './NavBar.css'

const NavBar = ({isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isToggled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };
  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };
  tailwind.config = {
    darkMode: 'class',
  }

  return (
    <div className="menubar w-full fixed top-0 left-0 z-20 backdrop-blur-lg transition-colors duration-100">
      <nav className="navbar w-full flex justify-between items-center py-2 px-5">
        <div className="navbar-logo">
          <svg className="mylogo-logo w-7 h-7" viewBox="0 0 883 872" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='logo-box' d="M221 433.894L223.146 217L442 219.106V436L221 433.894Z" fill="#111"></path>
            <path className='logo-j' d="M874 0H439L440 218.5H654L658 411C652 474 648.5 537.5 577.5 598.5C520.5 652 430 668 361 637C305.8 612.2 274.333 578 265.5 564C255.5 554.4 241.333 525.667 235.5 512C221.5 466.5 222.5 450 221.5 435H1.00001C6.31809e-06 442 4.00001 491.5 15.5 540.5C29.5 610.5 98.5 729.5 191.5 791C284.5 852.5 343.5 876 465 870.5C586.5 865 667.5 815.5 731.5 757.5C795.5 699.5 844.5 598.5 849 572C884 477.5 882.5 369 883 369C883 302.2 878.333 159.167 876 96L874 0Z" fill="#007CDF"></path>
          </svg>
        </div>
        <div className="rightNavBar flex items-center">
        <ul className={`navbar-links list-none flex gap-5 pt-2 hidden md:flex lg:flex ${isMenuOpen ? 'menu-open-right' : ''}`}>
            <li><a href="#home" className="text-base text-gray-800 dark:text-slate-300 tracking-wider">Home</a></li>
            <li><a href="#about" className="text-base text-gray-800 dark:text-slate-300 tracking-wider">About</a></li>
            <li><a href="#Projects" className="text-base text-gray-800 dark:text-slate-300 tracking-wider">Projects</a></li>
            <li><a href="#contact" className="text-base text-gray-800 dark:text-slate-300 tracking-wider">Contact</a></li>
          </ul>
          <div className='menu-open text-base text-gray-800 dark:text-slate-900 w-7 h-7 bg-gray-200 dark:bg-slate-500 items-center justify-center rounded-full flex md:hidden lg:hidden' onClick={handleMenuOpen}><i className="fa-solid fa-bars"></i></div>
          <div id="toggle" className={`changer ${isToggled ? 'change' : ''} w-[55px] h-[27px] ml-3 md:ml-5 lg:ml-5 bg-slate-200 dark:bg-slate-500 text-slate-900 dark:text-slate-400 shadow rounded-full p-1 cursor-pointer relative z-10`}
            onClick={handleToggle}
          >
            <span className={`changer ${isToggled ? 'change' : ''} w-[21px] h-[21px] bg-white dark:bg-slate-900 rounded-full shadow flex items-center justify-center transform transition-transform duration-500 ${isToggled ? 'translate-x-[25px]' : ''}`}
            >
              <i className={`fa-solid fa-cloud-moon moon changer ${isToggled ? 'change text-xs' : 'theme-toggle'}`}></i>
              <i className={`fa-solid fa-cloud-sun sun changer ${!isToggled ? 'change text-xs' : 'theme-toggle'}`}></i>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
