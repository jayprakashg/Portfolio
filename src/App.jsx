import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './componet/NavBar/NavBar';
import MiddleBar from './componet/MiddleBar/MiddleBar';
import CursorCircles from './componet/CursorCircles/CursorCircles';
import AboutBar from './componet/AboutBar/AboutBar';
import ProjectBar from './componet/ProjectBar/ProjectBar';

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
      <CursorCircles/>
      <NavBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />    
      <AboutBar/>
      <MiddleBar />
      <ProjectBar/>
    </div>
  );
}

export default App;

