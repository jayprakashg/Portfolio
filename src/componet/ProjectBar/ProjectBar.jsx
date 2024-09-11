import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectBar.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectBar = () => {
  
  useEffect(() => {
     let tl1 = gsap.timeline({
      scrollTrigger: {
        triggre: ".two",
        start: "90% 10%",
        end: "200% 50%",
        pin:true,
        scrub:true,
        //markers:true
      }
    });

    tl1.to(".img1",{
      top:"-120%",
    }, "same")
    tl1.to(".two h5",{
      marginBttom:"0%",
    }, "same")
    tl1.to(".img2",{
      top:"-20%"
    }, "same")
    tl1.to(".img4",{
      top:"-100%"
    }, "same")
    tl1.to(".img5",{
      top:"-10%"
    }, "same")
    let tl2 = gsap.timeline({
      scrollTrigger: {
        triggre: ".three",
        start: "150% 30%",
        end: "100% 50%",
        markers:true,
        scrub:true
      }
    });
    tl2.to(".img3",{
      top:"50%"
    }, "s2")
    tl2.to(".img6",{
      top:"67%",
    }, "s2")

  }, []);

  return (
    <div id="main">
    <div class="two">
      <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h3>
      <h1>From 2015 With Passion</h1>
      <h5>desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
      <div class="img img1"></div>
      <div class="img img2"></div>
      <div class="img img3"></div>
      <div class="img img4"></div>
      <div class="img img5"></div>
      <div class="img img6"></div>
    </div>
 </div>
  );
};

export default ProjectBar;
