import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MyprojectBar.css';
import IMG1 from '../../../public/img/img1.jpg';
import IMG2 from '../../../public/img/img2.jpg';
import IMG3 from '../../../public/img/img3.jpg';
import IMG4 from '../../../public/img/img4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Myprojects = () => {
    useEffect(() => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".project-two", 
                start: "10% 10%",
                end: "150% 50%",
                scrub: true,
                //markers: true
            }
        });

        tl1
        .to(".img1", {
            top: "-120%",
        }, "same")
        // .to(".project-two h5", {
        //     marginBottom: "0%",
        // }, "same")
        .to(".img2", {
            top: "-20%",
        }, "same")
        .to(".img4", {
            top: "-100%",
        }, "same")
        .to(".img5", {
            top: "-10%",
        }, "same");

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".project-three ",
                start: "70% 50%",
                end: "150% 50%",
                //markers: true,
                scrub: true
            }
        });
        tl2
        .to(".img3", {
            top: "55%",
        }, "s2")
        .to(".img6", {
            top: "67%",
        }, "s2");
   
    }, []);

    return (
        <section id='myprojects' className='w-full h-full'>
            <div className='mx-auto max-w-screen-xl p-4 lg:p-16'>
                <div className='myproject py-12'>
                    <h1 className='pb-12 text-gray-900 dark:text-slate-400 text-4xl md:text-5xl lg:text-5xl text-center'>My Projects</h1>
                    <div className='pb-12 text-gray-800 dark:text-slate-300 tracking-wider text-sm md:text-lg lg:text-lg text-center'>
                        <p>An independent designer's site reflecting five years of work</p>
                        <p>Life and play—built on the belief that we are more than just our last projects,</p>
                        <p>blending global work, balance, and the arts.</p>
                    </div>
                </div>
                <div className="portfolio__container grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-20">
                    <article className='portfolio__item bg-white dark:bg-slate-800 p-5 rounded-xl border-transparent shadow'>
                        <div className="portfolio__item-image rounded-xl overflow-hidden">
                            <img src={IMG1} alt="Corporate Website" />
                        </div>
                        <h3 className='font-semibold mb-2 mt-5 text-lg text-gray-800 dark:text-slate-400'>Corporate Website</h3>
                        <small className='text-light text-sm font-medium text-gray-700 dark:text-slate-300'>HTML | CSS | JS</small>
                        <div className="portfolio__item-cta flex mt-8 mb-4 gap-4">
                            <a href="https://github.com/jayprakashg/Landing-page-payroll" target="_blank" rel='noreferrer' className='btn text-lg text-gray-800 dark:text-slate-400 border border-gray-800 dark:border-gray-400 rounded-lg py-2 px-3'>Github</a>
                        </div>
                    </article>
                    <article className='portfolio__item bg-white dark:bg-slate-800 p-5 rounded-xl border-transparent shadow'>
                        <div className="portfolio__item-image rounded-xl overflow-hidden">
                            <img src={IMG2} alt="E-commerce website" />
                        </div>
                        <h3 className='font-semibold mb-2 mt-5 text-lg text-gray-800 dark:text-slate-400'>E-commerce website</h3>
                        <small className='text-light text-sm font-medium text-gray-700 dark:text-slate-300'>HTML | CSS | JS | PS</small>
                        <div className="portfolio__item-cta flex mt-8 mb-4 gap-4">
                            <a href="https://github.com/jayprakashg/Go4ethenic" target="_blank" rel='noreferrer' className='btn text-lg text-gray-800 dark:text-slate-400 border border-gray-800 dark:border-gray-400 rounded-lg py-2 px-3'>Github</a>
                        </div>
                    </article>
                    <article className='portfolio__item bg-white dark:bg-slate-800 p-5 rounded-xl border-transparent shadow'>
                        <div className="portfolio__item-image rounded-xl overflow-hidden">
                            <img src={IMG3} alt="Marketing website" />
                        </div>
                        <h3 className='font-semibold mb-2 mt-5 text-lg text-gray-800 dark:text-slate-400'>Marketing website</h3>
                        <small className='text-light text-sm font-medium text-gray-700 dark:text-slate-300'>HTML | CSS | JS</small>
                        <div className="portfolio__item-cta flex mt-8 mb-4 gap-4">
                            <a href="https://www.behance.net/gallery/88130137/Gnminterior-Welcome-Page?tracking_source=project_owner_other_projects" target="_blank" rel='noreferrer' className='btn text-lg text-gray-800 dark:text-slate-400 border border-gray-800 dark:border-gray-400 rounded-lg py-2 px-3'>Behance</a>
                        </div>
                    </article>
                    <article className='portfolio__item bg-white dark:bg-slate-800 p-5 rounded-xl border-transparent shadow'>
                        <div className="portfolio__item-image rounded-xl overflow-hidden">
                            <img src={IMG4} alt="Marketing website" />
                        </div>
                        <h3 className='font-semibold mb-2 mt-5 text-lg text-gray-800 dark:text-slate-400'>Network Marketing</h3>
                        <small className='text-light text-sm font-medium text-gray-700 dark:text-slate-300'>React | HTML | CSS | JS</small>
                        <div className="portfolio__item-cta flex mt-8 mb-4 gap-4">
                            <a href="https://gyancable.com/" target="_blank" rel='noreferrer' className='btn text-lg text-gray-800 dark:text-slate-400 border border-gray-800 dark:border-gray-400 rounded-lg py-2 px-3'>GYAN CABLE NETWORK</a>
                        </div>
                    </article>
                </div>
                <div className="project-two relative w-full h-screen flex items-center justify-center flex-col gap-10 overflow-hidden">
                    <h3 className='text-gray-800 dark:text-slate-300 tracking-wider text-lg text-center'>In this section, you'll find more interesting content and animations. Keep scrolling to see what's next.</h3>
                    <h1 className='text-gray-900 dark:text-slate-200 tracking-wider text-4xl text-center font-semibold'>From 2015 With Passion</h1>
                    <h5 className='text-gray-800 dark:text-slate-300 tracking-wider text-base text-center font-normal mt-12'>You've reached the final section. Thank you for scrolling through our animation challenge. We hope you enjoyed it!</h5>
                    <div className="img img1"> <img className='shadow' src="public/img/corporate.jpg" alt="Marketing website" /> </div>
                    <div className="img img2"> <img className='shadow' src="public/img/corporate1.jpg" alt="" /> </div>
                    <div className="img img3"> <img className='shadow' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97062d88130137.5dcce8b7e7b87.jpg" alt="" /></div>
                    <div className="img img4"> <img className='shadow' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_632/6bd76b88996967.5de77d2e77341.jpg" alt="" /></div>
                    <div className="img img5"> <img className='shadow' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/3a88d787722303.5dc11f3251c89.jpg" alt="" /></div>
                    <div className="img img6"> <img className='shadow' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5fe62887276705.5db2d8ed0429c.jpg" alt="" /></div>
                </div>
                <div className="project-three"></div>
            </div>
        </section>
    );
}

export default Myprojects;
