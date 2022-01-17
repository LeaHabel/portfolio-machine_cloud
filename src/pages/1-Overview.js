import React from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import CloudIcon from "../assets/cloudiIcon.png";
import frame from "../assets/frame.png";

import Img1 from '../assets/img1.png'

export function Overview() {

    return (
        <>
            <div className="component-display">
                <div id="majorButton">
                    <img className="icon" src={CloudIcon} />
                    <h4>Send back to cloud</h4>
                </div>
                <Person
                    name="Nicolas Saavedra-Rueda"
                    major="Interaction Design"
                    position="pos0"
                    img1URL={Img1}
                />

                <Person
                    name="Max Mustermann"
                    major="Interaction Design"
                    position="pos1"
                    img1URL={Img1}
                />
            </div>
        </>
    );

}
