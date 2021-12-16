import React from "react";
import './Overview.css';

import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'

export function Overview() {

    return (
        <div className="component-display">
            <div className="person">
                <div id="personName">
                    <h1>Nicolas Saavedra-Rueda</h1>
                    <h2>Interaction Design</h2>
                </div>
                <div className="personImage">
                    <img src={Img1} />
                    <img src={Img2} />
                    <img src={Img3} />
                </div>
            </div>
        </div>
    );

}
