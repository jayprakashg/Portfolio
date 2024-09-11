import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/ui-ux-designer.json";
import animationData2 from "../../assets/website-design.json";
import animationData3 from "../../assets/app-design.json";
import "./MiddleBar.css";
import gsap from "gsap";

const MiddleBar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const leftEyeRef = useRef(null);
    const rightEyeRef = useRef(null);
    const leftPupilRef = useRef(null);
    const rightPupilRef = useRef(null);

    const tabData = [
        {
            label: (
                <>
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </>
            ),
            content: (
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }} />
            )
        },
        {
            label: (
                <>
                    <h2>Website Design</h2>
                    <p>This demo text can be changed while making the production-ready site.</p>
                </>
            ),
            content: (
                <Lottie className="lottie-animation" options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData2,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }} />
            )
        },
        {
            label: (
                <>
                    <h2>App Design</h2>
                    <p>You can write text related to mobile app development.</p>
                </>
            ),
            content: (
                <Lottie options={{
                    loop: true,
                    autoplay: true,
                    animationData: animationData3,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }} />
            )
        },
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            const eyes = [
                { eye: leftEyeRef.current, pupil: leftPupilRef.current },
                { eye: rightEyeRef.current, pupil: rightPupilRef.current },
            ];

            eyes.forEach(({ eye, pupil }) => {
                const rect = eye.getBoundingClientRect();
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;
                const deltaX = event.clientX - eyeCenterX;
                const deltaY = event.clientY - eyeCenterY;

                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
                const maxMovement = (rect.width / 2) - 10;

                const limitedX = (deltaX / distance) * Math.min(distance, maxMovement);
                const limitedY = (deltaY / distance) * Math.min(distance, maxMovement);

                gsap.to(pupil, { x: limitedX, y: limitedY, duration: 0.1, ease: 'power2.out' });
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [leftEyeRef, rightEyeRef, leftPupilRef, rightPupilRef]);

    return (
        <section className="MiddleBar">
            <div className="maxWidth padOverall boxSizing bg-green">
                <div className="text-Align">
                    <h1 className="whatDo padBottom">What I Do</h1>
                    <p className="skilled padBottom">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator also use canva.</p>
                </div>
                <div className="react-container padTop">
                    <div className="tabs">
                        {tabData.map((tab, index) => (
                            <a
                                key={index}
                                className={`tab ${activeTab === index ? 'active' : ''}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.label}
                            </a>
                        ))}
                    </div>
                    <div className="tab-content">
                        <div className="animated-svg">{tabData[activeTab].content}</div>
                    </div>
                </div>
            </div>
            <div className="skills-blog">
                <div className="jp-home-integration maxWidth bg-red">
                    <div className="content-wrap bottom-animated animated middle-animated">
                        <div className="zp-integ-content">
                            <h1>FRONT END DEVELOPER <br /> Skills</h1>
                            <div className="eyes-container">
                                <div className="eye" ref={leftEyeRef}>
                                    <div className="pupil" ref={leftPupilRef}></div>
                                </div>
                                <div className="eye" ref={rightEyeRef}>
                                    <div className="pupil" ref={rightPupilRef}></div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li className="jp-integ-circleleft"></li>
                            <li className="jp-integ-zcrm 1" title="HTML"><div><span className="prd-name">HTML</span></div></li>
                            <li className="jp-integ-square1"></li>
                            <li className="jp-integ-zcreator integ-bg 2" title="CSS"><div><span className="prd-name">CSS</span></div></li>
                            <li className="jp-integ-msteams integ-bg 3" title="Js"><div><span className="prd-name">Js</span></div></li>
                            <li className="jp-integ-zgit 4" title="Git"><div><span className="prd-name">Git</span></div></li>
                            <li className="jp-integ-square2"></li>
                            <li className="jp-integ-zrecruit integ-bg 5" title="React Js"><div><span className="prd-name">React Js</span></div></li>
                            <li className="jp-integ-zdesk integ-bg 6" title="Jquery"><div><span className="prd-name">Jquery</span></div></li>
                            <li className="jp-integ-emudhra integ-bg 7" title="Git Hub"><div><span className="prd-name">Git Hub</span></div></li>
                            <li className="jp-integ-zpeople integ-bg 8" title="Boostrap"><div><span className="prd-name">Boostrap</span></div></li>
                            <li className="jp-integ-hubspot 9" title="Photoshop"><div><span className="prd-name">Photoshop</span></div></li>
                            <li className="jp-integ-dropbox integ-bg 10" title="Canva"><div><span className="prd-name">Canva</span></div></li>
                            <li className="jp-integ-square4"></li>
                            <li className="jp-integ-redux 11" title="Redux"><div><span className="prd-name">Redux</span></div></li>
                            <li className="jp-integ-sass integ-bg 12" title="Sass"><div><span className="prd-name">Sass</span></div></li>
                            <li className="jp-integ-square5"></li>
                            <li className="jp-integ-square6"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiddleBar;
