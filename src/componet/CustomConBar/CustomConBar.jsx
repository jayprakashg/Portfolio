import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CustomConBar.css';
import ContactBar from '../../componet/ContactBar/ContactBar';

gsap.registerPlugin(ScrollTrigger);

const AnimatedScroll = () => {
  const textRef = useRef(null);
  const trackRef = useRef(null);
  const shapeRef = useRef(null);
  const socialaRef = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: trackRef.current,
        start: '10% 10%',
        end: 'bottom 50%',
        scrub: true,
        //markers:true
      },
      onComplete: () => {
        tl2.play();
      }
    });

    tl1.to('.no-matter .coloreffect h1', {
      width: '100%',
    });

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bgscale",
        scrub: true,
        start: "10% 10%",
        end: "+=100%",
        //markers:true
      },
      paused: true, 
    });
    tl2.to(".menubar",{opacity: 0,})
    tl2.to(socialaRef.current, {zIndex:0,});
    tl2.to(shapeRef.current, { scale: 30, duration:10, ease: "power2" });
    tl2.to(textRef.current, { opacity: 1, ease: "power2" });
    tl2.to(".contactbottomtext", {bottom: '-90px', duration:2, ease: "power2" });

  }, []);

  return (
    <div className="bgtrack" ref={trackRef}>
      <div className="overlay overlaybbg sticky top-0 overflow-hidden">
        <div className="contactform w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10 flex-col">
          <div className="text-inner flex items-center justify-center w-full h-full opacity-0 p-4 md:p-0 lg:p-0" ref={textRef}><ContactBar /></div>
        </div>
        <div className="text-group absolute flex items-center w-full flex-col mt-12">
          <h1 className="peace text-center text-5xl md:text-7xl lg:text-7xl"><span className="peace-text">PEACE OF MIND,</span></h1>
          <div className="no-matter text-5xl md:text-7xl lg:text-7xl relative w-full flex items-center justify-center">
            <div className="scro-matter absolute text-gray-900 dark:text-slate-400"><h1>NO MATTER THE PLATFORM PEAC</h1></div>
            <div className="scro-matter absolute text-gray-900 dark:text-slate-400 coloreffect"><h1>NO MATTER THE PLATFORM PEAC</h1></div>
          </div>
        </div>
        <div className="social-ation w-full h-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 z-10" ref={socialaRef}>
          <div className="socialmedia relative flex items-center justify-center flex-col">
            <div className="socialround m-auto bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden shadow">
              <img src="../../public/img/me.png" alt="Profile" />
            </div>
            <ul className="socialmedia-icon">
              <li><i className="text-gray-800 dark:text-slate-300 fa-brands fa-facebook-f"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-brands fa-youtube"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-brands fa-behance"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-solid fa-indian-rupee-sign"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-brands fa-square-instagram"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-solid fa-gem"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-brands fa-google-drive"></i></li>
              <li><i className="text-gray-800 dark:text-slate-300 fa-solid fa-house-chimney-window"></i></li>
            </ul>
          </div>
        </div>
        <div className="roundshape flex items-center justify-center h-full" ref={shapeRef}>
            <div className="bgrotate">
              <div className="img">
                <svg className="circle w-full h-full absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
                  <circle className="circle-path" cx="81" cy="81" r="70"></circle>
                </svg>
              </div>
            </div>
            
        </div>
        <div className="bgscale absolute bottom-0 w-full h-[10px]"></div>
      </div>
    </div>
  );
};

export default AnimatedScroll;
