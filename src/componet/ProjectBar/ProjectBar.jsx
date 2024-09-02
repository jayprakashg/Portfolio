import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectBar.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectBar = () => {
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#project",
        //markers: true,
        start: "top 10%",
        end: "top 10%",
        scrub: 4,
        pin: true
      }
    });

    tl.to(".text", {
      top: "-7%",
    }, 'a')
      .to("#card-one", {
        top: "20%",
      }, 'a')
      .to("#card-two", {
        top: "110%"
      }, 'a')
      .to("#card-two", {
        top: "27%"
      }, 'b')
      .to("#card-one", {
        width: "50%",
        height: "55vh"
      }, 'b')
      .to("#card-three", {
        top: "110%"
      }, 'b')
      .to("#card-three", {
        top: "35%"
      }, 'c')
      .to("#card-two", {
        width: "55%",
        height: "55vh"
      }, 'c');

  }, []);

  return (
    <div id="project">
      <div className="text">
        <div className="text-img">
            <svg width="68" height="68" viewBox="0 0 883 872" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M221 433.894L223.146 217L442 219.106V436L221 433.894Z" fill="var(--logo-sc)"/>
                <path d="M874 0H439L440 218.5H654L658 411C652 474 648.5 537.5 577.5 598.5C520.5 652 430 668 361 637C305.8 612.2 274.333 578 265.5 564C255.5 554.4 241.333 525.667 235.5 512C221.5 466.5 222.5 450 221.5 435H1.00001C6.31809e-06 442 4.00001 491.5 15.5 540.5C29.5 610.5 98.5 729.5 191.5 791C284.5 852.5 343.5 876 465 870.5C586.5 865 667.5 815.5 731.5 757.5C795.5 699.5 844.5 598.5 849 572C884 477.5 882.5 369 883 369C883 302.2 878.333 159.167 876 96L874 0Z" fill="var(--logo-j)"/>
              </svg>
        </div>
        <h1>My Project</h1>
        <p>An independent designer's site reflecting five years of work, life,</p>
        <p>and play—built on the belief that we are more than just our last projects,</p>
        <p>blending global work, balance, and the arts.</p>
      </div>
      <div className="cards" id="card-one">
        <img src="src/assets/corporate.jpg" alt="Corporate Website" />
        <div className="content-text-box">
          <span className="website-tag">Corporate Website</span>
          <h4 className="vale-sorce">
            <span>Qalander Nasseri</span>
          </h4>
        </div>
      </div>
      <div className="cards" id="card-two">
        <div className="content-text-box">
          <span className="website-tag">E-commerce website</span>
          <h4 className="vale-sorce">
            <span>Go 4 Ethnic</span>
          </h4>
        </div>
      </div>
      <div className="cards" id="card-three">
        <img src="src/assets/marketing.jpg" alt="Marketing Website" />
        <div className="content-text-box">
          <span className="website-tag">Marketing website</span>
          <h4 className="vale-sorce">
            <span>GNM Interior</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProjectBar;
