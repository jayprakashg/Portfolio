import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CustomConBar.css'; // Import your styles here
import ContactBar from '../../componet/ContactBar/ContactBar';

gsap.registerPlugin(ScrollTrigger);

const AnimatedScroll = () => {
  const textRef = useRef(null);
  const trackRef = useRef(null);
  const shapeRef = useRef(null);
  const socialaRef = useRef(null);

  useEffect(() => {
    // Timeline with ScrollTrigger
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: trackRef.current,
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true,
        //markers:true
        //pin:true,
      },
    });

    tl1.to('.no-matter .coloreffect h1', {
      width: '100%',
      ease: 'none',
    });

    // Paused timeline for manual control
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: shapeRef.current,
            start: '50% 50%',
            end: '100% 50%',
            scrub: true,
            paused: true, 
            //markers:true
          },
    });

    tl2
      .to(socialaRef.current, {
        duration: 1,
        zIndex: '0',
      })
      .to(shapeRef.current, {
        opacity:'0',
        duration: 1.5,
      })
      .to(shapeRef.current, {
        opacity:'0.2',
        duration: 1.5,
      })
      .to(shapeRef.current, {
        opacity:'0.5',
        duration: 1.5,
      })
      .to(shapeRef.current, {
        opacity:'0.6',
        duration: 1.5,
      })
      .to(shapeRef.current, {
        opacity:'0.8',
        duration: 1.5,
      })
      .to(shapeRef.current, {
        opacity:'1',
        duration: 2.5,
      })
      .to(shapeRef.current, {
        duration: 2.5,
        scale: 30,
        ease: 'expo.in',
      })
      .to(textRef.current, {
        opacity: 0,
        duration: 1.5,
      })
      .to(shapeRef.current, {
        duration: 2.5,
        opacity:'1',
      })
      .to(textRef.current, {
        duration: 2.5,
        opacity: 1,
      });

    // Scroll event listener to control timeline progress
    const handleScroll = () => {
      const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      tl2.progress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bgtrack" ref={trackRef}>
      <div className="overlay overlaybbg">
        <div className="contactform">
          <div className="text-inner" ref={textRef}><ContactBar/></div>
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
              <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2438031869.jpg" alt="Profile" />
            </div>
            <ul className="socialmedia-icon">
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-youtube"></i></li>
              <li><i className="fa-brands fa-behance"></i></li>
              <li><i className="fa-solid fa-indian-rupee-sign"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li>
              <li><i className="fa-solid fa-gem"></i></li>
              <li><i className="fa-brands fa-google-drive"></i></li>
              <li><i className="fa-solid fa-house-chimney-window"></i></li>
            </ul>
          </div>
        </div>
        <div className="roundshape" ref={shapeRef}>
          <div className="bgscale">
            <div className="bgrotate">
              <div className="img">
                <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
                  <circle className="circle-path" cx="81" cy="81" r="70"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedScroll;
