import React from "react";
import '../pages/Overview.css';
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'


export function Person() {

    return (
        <>
            <svg width="388" height="396" viewBox="0 0 388 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="clip">
                    <path d="M206.5 393.891C122.088 396.654 39.4501 353.706 11.9058 274.626C-16.8917 191.948 15.8661 101.238 86.2601 48.6526C158.753 -5.50123 259.06 -17.8094 330.769 36.3572C397.872 87.0447 397.629 182.029 369.598 262.767C344.237 335.812 283.402 391.374 206.5 393.891Z" stroke="#D8E5F5" stroke-width="5" />
                </clipPath>
            </svg>

            <div className="person big">
                <div id="personName">
                    <h1>Nicolas Saavedra-Rueda</h1>
                    <h2>Interaction Design</h2>
                </div>
                <div className="personImage">
                    <div className="grid">
                        <img className="grid1" src={Img3} />
                        <img className="grid2" src={Img1} />
                        <img className="grid3" src={Img3} />
                        <img className="grid4" src={Img2} />
                    </div>
                </div>
            </div>
        </>
    );

}
