import React, { useEffect } from "react";
import "./AboutBar.css";
import CanvasImageRotation from "../CanvasImageRotation/CanvasImageRotation";

function AboutBar() {
    return (
        <section className="aboutwrap flex items-center justify-center relative w-full h-screen mt-20">
            <div className="AboutBar w-full h-full">
                <div className="mx-auto max-w-screen-xl p-4 lg:p-16">
                    <div className="about-contener bg-green flex items-center justify-center md:justify-between lg:justify-between relative flex-wrap md:flex-nowrap lg:flex-nowrap">
                        <div className="about-text-blog">
                            <h2 className="text-lg mb-2 tracking-wide pl-2 text-color">Hello, I'm</h2>
                            <h1 className="text-4xl md:text-6xl lg:text-6xl tracking-wider relative font-semibold text-gray-800 dark:text-slate-300">
                                <span className="text-5xl md:text-8xl lg:text-8xl font-semibold">J</span>ayprakash Gupta

                            </h1>
                            <p className="about-text-me text-lg mb-5 text-gray-800 dark:text-slate-400">
                                A <span className="text-green-600 creative-designer">Creative Designer</span> From{" "}
                                <span className="text-purple-600 country">India</span>
                            </p>
                            <p className="about-txet-work text-base mb-12 text-gray-800 dark:text-slate-400">
                                I'm a creative designer based in India, and I'm very
                                <span className="about-txet-work w-full flex">passionate and dedicated to my work.</span> 
                            </p>

                            <div className="about-btn flex items-center justify-between md:justify-strat lg:justify-strat space-x-3">
                                <a href="https://marketplace.canva.com/EAFk2sEzxO8/2/0/1131w/canva-dZr9WsdAK8c.jpg" target="_blank"
                                    rel="noopener noreferrer" className="py-2 md:py-3 lg:py-3 px-2 md:px-6 lg:px-6 rounded-md text-sm md:text-lg lg:text-lg bg-slate-900 dark:bg-slate-700 text-slate-300 dark:text-slate-200 tracking-wider"
                                >
                                    Download Resumes
                                </a>
                                <ul className="flex items-center space-x-2">
                                    <li><a href="#!" className="w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 p-4 text-md rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 dark:bg-slate-950 dark:text-slate-300"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#!" className="w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 p-4 text-md rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 dark:bg-slate-950 dark:text-slate-300"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.behance.net/jayprakashgupta/" className="w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 p-4 text-md rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 dark:bg-slate-950 dark:text-slate-300"><i className="fa-brands fa-behance"></i></a></li>
                                    <li><a href="https://github.com/jayprakashg" className="w-8 h-8 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 p-4 text-md rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 dark:bg-slate-950 dark:text-slate-300"><i className="fa-brands fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-image relative z-10 mt-10 md:mt-0 md:ml-10">
                            <img src="public/img/me.png" alt="" className="w-96" />
                            {/* <CanvasImageRotation/> */}
                            <img id="ball" src="public/img/doodle3.svg" alt="ball" className="absolute"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBar;
