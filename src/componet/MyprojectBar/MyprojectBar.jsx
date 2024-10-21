import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MyprojectBar.css';
import IMG1 from '../../../public/img/img1.jpg';
import IMG2 from '../../../public/img/img2.jpg';
import IMG3 from '../../../public/img/img3.jpg';

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
        <section id='myprojects'>
            <div className='maxWidth'>
                <div className='myproject padTop padBottom'>
                    <h1>My Projects</h1>
                    <p>An independent designer's site reflecting five years of work</p>
                    <p>Life and play—built on the belief that we are more than just our last projects,</p>
                    <p>blending global work, balance, and the arts.</p>
                </div>
                <div className="portfolio__container">
                    <article className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={IMG1} alt="Corporate Website" />
                        </div>
                        <h3>Corporate Website</h3>
                        <small className='text-light'>HTML | CSS | JS</small>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/jayprakashg/Landing-page-payroll" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={IMG2} alt="E-commerce website" />
                        </div>
                        <h3>E-commerce website</h3>
                        <small className='text-light'>HTML | CSS | JS | PS</small>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/jayprakashg/Go4ethenic" target="_blank" rel='noreferrer' className='btn'>Github</a>
                        </div>
                    </article>
                    <article className='portfolio__item'>
                        <div className="portfolio__item-image">
                            <img src={IMG3} alt="Marketing website" />
                        </div>
                        <h3>Marketing website</h3>
                        <small className='text-light'>HTML | CSS | JS</small>
                        <div className="portfolio__item-cta">
                            <a href="https://www.behance.net/gallery/88130137/Gnminterior-Welcome-Page?tracking_source=project_owner_other_projects" target="_blank" rel='noreferrer' className='btn'>Behance</a>
                        </div>
                    </article>
                </div>
                <div className="project-two">
                    <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h3>
                    <h1>From 2015 With Passion</h1>
                    <h5>I love to help reach out and I'll get in touch.</h5>
                    <div className="img img1"> <img src="public/img/corporate.jpg" alt="Marketing website" /> </div>
                    <div className="img img2"> <img src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" /> </div>
                    <div className="img img3"> <img src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" alt="" /></div>
                    <div className="img img4"> <img src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" alt="" /></div>
                    <div className="img img5"> <img src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP" alt="" /></div>
                    <div className="img img6"> <img src="https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-020.jpg" alt="" /></div>
                </div>
                <div className="project-three"></div>
            </div>
        </section>
    );
}

export default Myprojects;
