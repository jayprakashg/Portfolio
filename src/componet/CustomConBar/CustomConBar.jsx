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
    tl2.to(".contactbottomtext", {bottom: '-280px', duration:2, ease: "power2" });

  }, []);

  return (
    <div className="bgtrack" ref={trackRef}>
      <div className="overlay overlaybbg">
        <div className="contactform">
          <div className="text-inner" ref={textRef}><ContactBar /></div>
        </div>
        <div className="text-group">
          <h1 className="peace"><span className="peace-text">PEACE OF MIND,</span></h1>
          <div className="no-matter">
            <div className="scro-matter"><h1>NO MATTER THE PLATFORM PEAC</h1></div>
            <div className="scro-matter coloreffect"><h1>NO MATTER THE PLATFORM PEAC</h1></div>
          </div>
        </div>
        <div className="social-ation" ref={socialaRef}>
          <div className="socialmedia">
            <div className="socialround">
              <img src="../../public/img/other.png" alt="Profile" />
            </div>
            <ul className="socialmedia-icon">
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-youtube"></i></li>
              <li><i className="fa-brands fa-behance"></i></li>
              <li><i className="fa-solid fa-indian-rupee-sign"></i></li>
              <li><i class="fa-brands fa-square-instagram"></i></li>
              <li><i className="fa-solid fa-gem"></i></li>
              <li><i className="fa-brands fa-google-drive"></i></li>
              <li><i className="fa-solid fa-house-chimney-window"></i></li>
            </ul>
          </div>
        </div>
        <div className="roundshape" ref={shapeRef}>
            <div className="bgrotate">
              <div className="img">
                <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
                  <circle className="circle-path" cx="81" cy="81" r="70"></circle>
                </svg>
              </div>
            </div>
            
        </div>
        <div className="bgscale"></div>
      </div>
    </div>
  );
};

export default AnimatedScroll;
