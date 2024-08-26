import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectBar.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectBar = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-project",
        start: "top 0%",
        end: "top 10%",
        scrub: 2,
        pin: true,
        //markers:true,
      }
    });
    tl
      .to("#p-top", {
        top: "-50%"
      }, 'm')
      .to("#p-bottom", {
        bottom: "-50%"
      }, 'm')
      .to("#p-top-h", {
        top: "100%"
      }, 'm')
      .to("#p-bottom-h", {
        bottom: "-100%"
      }, 'm')
      .to(".tab-wrapper", {
        marginTop: "0%"
      }, 'm');
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="main-project">
      <div className="p-head" id="p-top">
        <h1 id="p-top-h">Project</h1>
      </div>
      <div id="p-center">
        <div className="tab-wrapper">
          <div className="tabs">
            <div
              className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
              data-tab="tab1"
              onClick={() => handleTabClick('tab1')}
            >
              <a href="javascript:void(0)">
                <i className="fa fa-window-maximize" aria-hidden="true"></i> Landing Pages
              </a>
            </div>
            <div
              className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
              data-tab="tab2"
              onClick={() => handleTabClick('tab2')}
            >
              <a href="javascript:void(0)">
                <i className="fa fa-bars" aria-hidden="true"></i> Responsive Navigation Menu
              </a>
            </div>
            <div
              className={`tab-button ${activeTab === 'tab3' ? 'active' : ''}`}
              data-tab="tab3"
              onClick={() => handleTabClick('tab3')}
            >
              <a href="javascript:void(0)">
                <i className="fa fa-ring" aria-hidden="true"></i> Other
              </a>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1">
            <h2>Tab 1 Content</h2>
            <p>This is the content for Tab 1.</p>
          </div>
          <div className={`tab-content ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2">
            <h2>Tab 2 Content</h2>
            <p>This is the content for Tab 2.</p>
          </div>
          <div className={`tab-content ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3">
            <h2>Tab 3 Content</h2>
            <p>This is the content for Tab 3.</p>
          </div>
        </div>
      </div>
      <div className="p-head" id="p-bottom">
        <h1 id="p-bottom-h">Project</h1>
      </div>
    </div>
  );
};

export default ProjectBar;
