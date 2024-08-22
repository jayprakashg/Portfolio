import React, { useEffect, useState } from 'react';
import './NavBar.css';

const NavBar = ({ toggleTheme, isDarkTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 600);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle event handler
  const handleToggle = () => {
    setIsToggled((prev) => !prev);
    toggleTheme();
  };

  return (
    <div className={`menubar ${isScrolled ? 'at-top' : ''}`}>
      <nav className="navbar">
        <div className="navbar-logo">MyApp</div>
        <div className="rightNavBar">
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
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
