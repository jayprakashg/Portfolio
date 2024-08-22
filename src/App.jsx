import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './componet/NavBar/NavBar';
import BannerBar from './componet/BannerBar/BannerBar';
import MiddleBar from './componet/MiddleBar/MiddleBar';
import CursorCircles from './componet/NavBar/CursorCircles/CursorCircles';
import AboutBar from './componet/AboutBar/AboutBar';

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
      <BannerBar />
      <MiddleBar />
      <AboutBar/>
    </div>
  );
}

export default App;

