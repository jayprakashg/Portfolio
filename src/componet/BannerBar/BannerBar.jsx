import React, { useEffect } from "react";
import './BannerBar.css';
import smokeVideo from '../../assets/smoke.mp4';

const BannerBar = () => {

    const updateWindowHeight = () => {
        const windowHeight = window.innerHeight;
        const elements = document.getElementsByClassName("videoplay");

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.height = `${windowHeight}px`;
        }
    };

    useEffect(() => {
        updateWindowHeight();
        window.addEventListener('resize', updateWindowHeight);
        return () => {
            window.removeEventListener('resize', updateWindowHeight);
        };
    }, []);

    return (
        <section className="videoplay">
            <h2>ASP.Net Developer</h2>
            <video src={smokeVideo} muted autoPlay loop></video>
        </section>
    );
};

export default BannerBar;
