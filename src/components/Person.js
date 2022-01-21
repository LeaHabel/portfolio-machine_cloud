import React from "react";

import '../pages/Overview.css';
import Media1 from '../assets/P14-2.jpg'
import Media2 from '../assets/P50-2.jpg'
import Media3 from '../assets/P19-1.jpg'
import Media4 from '../assets/P19-1.jpg'
import { Link } from "react-router-dom";


export function Person(props) {

    return (
        <>
            <Link to={"/profil"} className={`big maskBubble box  ${props.position}`} >
                <div className="person box" >
                    <div id="personName">
                        <h1 className="bubbleName">{props.name}</h1>
                        <h2 className="bubbleMajor">{props.major}</h2>
                    </div>


                    <div className="teaserGallery">
                        <div className="flex-container">
                            <div className="flex-item">
                                <img alt="" className="teaserImage" src={props.projectMedia1} />
                            </div>
                            <div className="flex-item portraitTestImage">
                                <img alt="" className="teaserImage" src={props.projectMedia2} />
                            </div>
                            <div className="flex-item">
                                <img alt="" className="teaserImage" src={props.projectMedia3} /> {/* png images won't be displayed */}
                            </div>
                        </div>
                        <div className="flex-container">

                            {/* <div className="flex-item">
                            <source src={Media4} type="video/mp4" />
                        </div> */}
                            <div className="flex-item">
                                <img alt="" className="teaserImage" src={Media1} />
                            </div>
                            <div className="flex-item">
                                <img alt="" className="teaserImage" src="https://d18p28upkrc95t.cloudfront.net/testimage2.jpg" />
                            </div>
                            <div className="flex-item">
                                <img alt="" className="teaserImage" src="https://d18p28upkrc95t.cloudfront.net/cat.jpg" />
                            </div>
                        </div>
                    </div>


                    <svg className="maskSVG big" viewBox="0 0 606 675" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <clipPath id="clip" className="maskingShape absolute">
                            <path id="path" className="" fillRule="evenodd" clipRule="evenodd" d="M301.069 0.540202C402.062 -5.85987 500.928 45.1073 560.472 126.932C617.226 204.924 612.203 305.883 591.881 400.175C571.148 496.373 536.182 595.426 449.47 641.956C358.94 690.535 247.107 682.406 156.628 633.734C70.7209 587.522 18.5803 498.122 3.05948 401.817C-11.237 313.11 26.2864 229.524 79.858 157.389C136.559 81.0399 206.159 6.55476 301.069 0.540202Z" fill="#C4C4C4" />
                            <path className="none two" fillRule="evenodd" clipRule="evenodd" d="M585.458 550.999C524.693 631.92 466.852 676.555 320.821 666.027C174.789 655.5 86.5 539.5 52 464.5C17.5 389.5 -2.99394 339.944 1.50299 246.971C5.99992 153.999 78.9979 52.4743 174.789 15.3334C265.74 -19.9305 390.838 12.9375 474.122 63.7241C550.836 110.504 617.275 189.739 637.289 277.334C658.473 370.045 642.564 474.953 585.458 550.999Z" fill="#C4C4C4" />
                        </clipPath>
                    </svg>
                </div>
            </Link>
        </>
    );
}