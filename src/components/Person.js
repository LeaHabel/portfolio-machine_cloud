import React from "react";

import gsap from "gsap";

import '../pages/Overview.css';
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'

const { useEffect, useRef } = React;

export function Person(props) {
    const boxRef = useRef();
    const childElement = useRef();

    // wait until DOM has been rendered
    useEffect(() => {
        gsap.to(boxRef.current, {
            rotation: "+=360",
            repeat: -1,
            duration: 100,
            ease: "slow"
        });
        gsap.to(childElement.current, {
            rotation: "-=360",
            repeat: -1,
            duration: 100,
            ease: "slow"
        });
    });

    return (
        <>
            <div className={`big maskBubble box fixed ${props.position}`} ref={boxRef}>
                <div className="person box" ref={childElement}>
                    <div id="personName">
                        <h1>{props.name}</h1>
                        <h2>{props.major}</h2>
                    </div>
                    <div className="flex-container">
                        <div className="flex-row">
                            <img className="flex-item" src={Img1} />
                            <img className="flex-item" src={Img2} />
                        </div>
                        <img className="flex-item last-item" src={Img3} />
                    </div>

                    <svg className="maskSVG " width="606" height="675" viewBox="0 0 606 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="clip">
                            <path id="path" fill-rule="evenodd" clip-rule="evenodd" d="M301.069 0.540202C402.062 -5.85987 500.928 45.1073 560.472 126.932C617.226 204.924 612.203 305.883 591.881 400.175C571.148 496.373 536.182 595.426 449.47 641.956C358.94 690.535 247.107 682.406 156.628 633.734C70.7209 587.522 18.5803 498.122 3.05948 401.817C-11.237 313.11 26.2864 229.524 79.858 157.389C136.559 81.0399 206.159 6.55476 301.069 0.540202Z" fill="#C4C4C4" />
                        </clipPath>
                    </svg>
                </div>
            </div>

        </>
    );

}
