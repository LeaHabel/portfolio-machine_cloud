import React from "react";
import './Overview.css';
import {Person} from "../components/Person";
import CloudIcon from "../assets/cloudiIcon.png";
import frame from "../assets/frame.png";

 export function Overview (){

        return (
            <div className="component-display">
                <img className="frame" src={frame} />
                <div id="majorButton">
                    <img className="icon" src={CloudIcon}/>
                    <h4>Major</h4>
                </div>
                <Person/>
            </div>
        );

}
