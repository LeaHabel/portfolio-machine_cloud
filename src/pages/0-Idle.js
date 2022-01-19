import React from "react";
import './Overview.css';
import CloudIcon from '../assets/cloudiIcon.png'
import frame from "../assets/frame.png";
import {Cloudbutton} from "../components/cloudbutton";
 export function Idle (){

        return (

            <div className="component-display">
                <img className="frame" src={frame} />
               <Cloudbutton/>
                <div className="person big">
                    <div id="idletext">
                        <h1>Have a look above you</h1>
                    </div>
                </div>
            </div>
        );

}
