import React, { useEffect } from "react";
import "./AboutBar.css";

function AboutBar() {
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

    return(
        <section className="videoplay">
            <div className="AboutBar">
                <div className="maxWidth padOverall boxSizing">
                    <div className="about-contener bg-green padTop">
                        <div className="about-text-blog">
                            <h2>Hello, I'm</h2>
                            <h1><span>J</span>ayprakash Gupta</h1>
                            <p className="about-text-me">A <span className="creative-designer">Creative Designer</span> From <span className="country">India</span></p>
                            <p className="about-txet-work">I'm creative designer based in india, and i'm very <br></br> passionate and dedicated to my work.</p>

                            <div className="about-btn">
                                <a className="myResumes" target="_blank" href="https://marketplace.canva.com/EAFk2sEzxO8/2/0/1131w/canva-dZr9WsdAK8c.jpg">Download Resumes</a>
                                <ul>
                                    <li><a href="#!"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#!"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.behance.net/jayprakashgupta/"><i className="fa-brands fa-behance"></i></a></li>
                                    <li><a href="https://github.com/jayprakashg"><i className="fa-brands fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="src/assets/me.png" alt="" />
                            <img id="ball" src="src/assets/doodle3.svg" alt="ball"/>
                        </div>
                    </div>
                </div>
            </div> 
            {/* <video src={smokeVideo} muted autoPlay loop></video> */}
        </section>
    );
}

export default AboutBar;