// CustomCursor.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './CustomCursor.css'; // Import your CSS

const CustomCursor = () => {
  // Refs for the cursor elements
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    // Function to update cursor positions smoothly with GSAP
    const onMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // Animate cursorDot with a quick, direct movement
      gsap.to(cursorDot, {
        duration: 0.3, // Quick response
        x: posX,
        y: posY,
        ease: 'power3.out',
      });

      // Animate cursorOutline with a slight delay for a trailing effect
      gsap.to(cursorOutline, {
        duration: 0.1, // Slight delay for trailing effect
        x: posX,
        y: posY,
        ease: 'power3.out',
      });
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', onMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-outline" ref={cursorOutlineRef}></div>
    </>
  );
};

export default CustomCursor;
