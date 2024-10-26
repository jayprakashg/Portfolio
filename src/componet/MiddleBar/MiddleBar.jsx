import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import animationData from "../../../public/img/ui-ux-designer.json";
import animationData2 from "../../../public/img/website-design.json";
import animationData3 from "../../../public/img/app-design.json";
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
                    <h2 className="mb-2 text-2xl">UI/UX Design</h2>
                    <p className="text-base">This is a demo text, you can write your own content here.</p>
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
                    <h2 className="mb-2 text-2xl">Website Design</h2>
                    <p className="text-base">This demo text can be changed while making the production-ready site.</p>
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
                    <h2 className="mb-2 text-2xl">App Design</h2>
                    <p className="text-base">You can write text related to mobile app development.</p>
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
        <section className="MiddleBar w-full h-full relative z-10">
            <div className="mx-auto max-w-screen-xl p-4 lg:p-16 bg-green">
                <div className="w-full text-center">
                    <h1 className="whatDo pb-12 text-gray-900 dark:text-slate-400 text-4xl md:text-5xl lg:text-5xl">What I Do</h1>
                    <p className="skilled pb-12 text-gray-800 dark:text-slate-300 tracking-wider text-sm md:text-lg lg:text-lg">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator also use canva.</p>
                </div>
                <div className="react-container w-full m-auto flex flex-wrap md:flex-nowrap lg:flex-nowrap pt-4 md:pt-12 lg:pt-12">
                    <div className="tabs flex justify-around flex-wrap bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
                        {tabData.map((tab, index) => (
                            <a
                                key={index}
                                className={`tab w-full pt-8 pb-8 cursor-pointer bg-transparent border-b-2 border-gray-300 dark:border-slate-600 outline-0 text-gray-800 dark:text-slate-400 mb-4 ${activeTab === index ? 'active' : ''}`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.label}
                            </a>
                        ))}
                    </div>
                    <div className="tab-content w-full bg-white dark:bg-slate-800 rounded-lg shadow mt-6 md:mt-0 lg:mt-0 ml-0 md:ml-12 lg:ml-12">
                        <div className="animated-svg w-auto m-auto">{tabData[activeTab].content}</div>
                    </div>
                </div>
            </div>
            <div className="skills-blog mx-auto max-w-screen-xl pr-4 pl-4 lg:pr-16 lg:pl-16 h-full relative">
                <div className="jp-home-integration max-w-screen-xl mx-auto bg-red relative">
                    <div className="content-wrap w-full bottom-animated animated middle-animated relative m-auto">
                        <div className="zp-integ-content text-center">
                            <h1 className="text-4xl text-gray-900 dark:text-slate-400">FRONT END DEVELOPER <br /> Skills</h1>
                            <div className="eyes-container flex justify-center items-center gap-5 mb-4">
                                <div className="eye w-[80px] h-[80px] bg-white dark:bg-slate-800 rounded-full relative overflow-hidden shadow" ref={leftEyeRef}>
                                    <div className="pupil dark:bg-white bg-slate-800 rounded-full absolute top-2/4 left-2/4" ref={leftPupilRef}></div>
                                </div>
                                <div className="eye w-[80px] h-[80px] bg-white dark:bg-slate-800 rounded-full relative overflow-hidden shadow" ref={rightEyeRef}>
                                    <div className="pupil dark:bg-white bg-slate-800 rounded-full absolute top-2/4 left-2/4" ref={rightPupilRef}></div>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li className="jp-integ-circleleft"></li>
                            <li className="jp-integ-zcrm 1" title="HTML"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">HTML</span></div></li>
                            <li className="jp-integ-square1"></li>
                            <li className="jp-integ-zcreator integ-bg 2" title="CSS"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">CSS</span></div></li>
                            <li className="jp-integ-msteams integ-bg 3" title="Js"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Js</span></div></li>
                            <li className="jp-integ-zgit 4" title="Git"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Git</span></div></li>
                            <li className="jp-integ-square2"></li>
                            <li className="jp-integ-zrecruit integ-bg 5" title="React Js"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">React Js</span></div></li>
                            <li className="jp-integ-zdesk integ-bg 6" title="Jquery"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Jquery</span></div></li>
                            <li className="jp-integ-emudhra integ-bg 7" title="Git Hub"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Git Hub</span></div></li>
                            <li className="jp-integ-zpeople integ-bg 8" title="Boostrap"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Boostrap</span></div></li>
                            <li className="jp-integ-hubspot 9" title="Photoshop"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Photoshop</span></div></li>
                            <li className="jp-integ-dropbox integ-bg 10" title="Canva"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Canva</span></div></li>
                            <li className="jp-integ-square4"></li>
                            <li className="jp-integ-redux 11" title="Redux"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Redux</span></div></li>
                            <li className="jp-integ-sass integ-bg 12" title="Sass"><div className="relative h-[92px] w-[92px] bg-white dark:bg-slate-800 m-0 rounded-lg shadow"><span className="prd-name">Sass</span></div></li>
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
