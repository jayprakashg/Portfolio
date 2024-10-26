import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import NavBar from './componet/NavBar/NavBar';
import MiddleBar from './componet/MiddleBar/MiddleBar';
import AboutBar from './componet/AboutBar/AboutBar';
import MyprojectBar from './componet/MyprojectBar/MyprojectBar';
import CustomCursor from './componet/CustomCursor/CustomCursor';
import CustomConBar from './componet/CustomConBar/CustomConBar';

function App() {
  return (
    <div className="App">
      <CustomCursor/>
      <NavBar />    
      <AboutBar/>
      <MiddleBar />
      <MyprojectBar/>
      <CustomConBar/>
    </div>
  );
}
export default App;

