import React from "react";
import './Overview.css';
import CloudIcon from '../assets/cloudiIcon.png'
import frame from "../assets/frame.png";
 export function Idle (){

        return (

            <div className="component-display">
                <img className="frame" src={frame} />
                <div id="majorButton">
                    <img class="icon" src={CloudIcon}/>
                    <h4>Major</h4>
                </div>
                <div className="person big">
                    <div id="idletext">
                        <h1>Have a look above you</h1>
                    </div>
                </div>
            </div>
        );

}
