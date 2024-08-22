import React from "react";
import "./AboutBar.css";

function AboutBar() {
    return(
        <section className="AboutBar">
            <div className="maxWitdh padOverall boxSizing">
                <div className="about-contener bg-green">
                    <div className="about-text-blog">
                        <h2>Hello, I'm</h2>
                        <h1><span>J</span>ames Smith</h1>
                        <p className="about-text-me">A <span className="creative-designer">Creative Designer</span> From <span className="country">India</span></p>
                        <p className="about-txet-work">I'm creative designer based in india, and i'm very <br></br> passionate and dedicated to my work.</p>

                        <div className="about-btn">
                            <a className="myResumes" target="_blank" href="https://marketplace.canva.com/EAFk2sEzxO8/2/0/1131w/canva-dZr9WsdAK8c.jpg">Download Resumes</a>
                            <ul>
                                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="src/assets/me.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutBar;