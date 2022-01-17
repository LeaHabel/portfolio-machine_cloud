import React from "react";

import '../pages/Overview.css';
import Bubble from '../assets/bubbleMorph.svg'
import Media1 from '../assets/P14-2.jpg'
import Media2 from '../assets/P50-2.jpg'
import Media3 from '../assets/P19-1.jpg'
import Media4 from '../assets/P19-1.jpg'


export function Person(props) {

    return (
        <>
            {/* <img src={Bubble} className={`big  fixed ${props.position}`}></img > */}

            <div className={`big maskBubble box fixed ${props.position}`} >
                <div className="person box" >
                    <div id="personName">
                        <h1 className="bubbleName">{props.name}</h1>
                        <h2 className="bubbleMajor">{props.major}</h2>
                    </div>


                    <div className="teaserGallery">
                        <div className="flex-container">
                            <div className="flex-item">
                                <img className="teaserImage" src={Media1} />
                            </div>
                            <div className="flex-item portraitTestImage">
                                <img className="teaserImage" src={Media2} />
                            </div>
                            <div className="flex-item">
                                <img className="teaserImage" src={Media3} />
                            </div>
                        </div>
                        <div className="flex-container">

                            {/* <div className="flex-item">
                            <source src={Media4} type="video/mp4" />
                        </div> */}
                            <div className="flex-item">
                                <img className="teaserImage" src={Media1} />
                            </div>
                            <div className="flex-item">
                                <img className="teaserImage" src={Media1} />
                            </div>
                            <div className="flex-item">
                                <img className="teaserImage" src={Media1} />
                            </div>
                        </div>
                    </div>


                    <svg className="maskSVG big" viewBox="0 0 606 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="clip" className="maskingShape absolute">
                            <path id="path" className="" fill-rule="evenodd" clip-rule="evenodd" d="M301.069 0.540202C402.062 -5.85987 500.928 45.1073 560.472 126.932C617.226 204.924 612.203 305.883 591.881 400.175C571.148 496.373 536.182 595.426 449.47 641.956C358.94 690.535 247.107 682.406 156.628 633.734C70.7209 587.522 18.5803 498.122 3.05948 401.817C-11.237 313.11 26.2864 229.524 79.858 157.389C136.559 81.0399 206.159 6.55476 301.069 0.540202Z" fill="#C4C4C4" />
                        </clipPath>
                    </svg>
                </div>
            </div>

        </>
    );

}
