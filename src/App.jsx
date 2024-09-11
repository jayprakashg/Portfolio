import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './componet/NavBar/NavBar';
import MiddleBar from './componet/MiddleBar/MiddleBar';
import AboutBar from './componet/AboutBar/AboutBar';
import MyprojectBar from './componet/MyprojectBar/MyprojectBar';
import ContactBar from './componet/ContactBar/ContactBar';
import CustomCursor from './componet/CustomCursor/CustomCursor';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkTheme]);


  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <div className="App">
      <CustomCursor/>
      <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />    
      <AboutBar/>
      <MiddleBar />
      <MyprojectBar/>
      <ContactBar/>
    </div>
  );
}

export default App;

