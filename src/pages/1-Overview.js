import React from "react";
import './Overview.css';
import {Person} from "../components/Person";
import CloudIcon from "../assets/cloudiIcon.png";
import frame from "../assets/frame.png";
import {Cloudbutton} from "../components/cloudbutton";
import {CloseButton} from "../components/closeButton";

export function Overview (){

    return (
        <div className="component-display">
            <Cloudbutton/>
            <img className="frame" src={frame} />
            <Person/>

        </div>
    );

}
