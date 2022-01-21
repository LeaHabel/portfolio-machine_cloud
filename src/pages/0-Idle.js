import React from "react";
import './Overview.css';
import CloudIcon from '../assets/cloudiIcon.png'
import frame from "../assets/frame.png";
import {Cloudbutton} from "../components/cloudbutton";
import BGsimple from "../assets/BGsimple.png";
import { Link } from "react-router-dom";

export function Idle (){

        return (

            <div className="component-display">
                <img className="background-specs" src={BGsimple} alt="Water Background"/>
                <Link to={"/overview"}>
                <div className="idle-bubble absolute">
                    <div id="idletext">
                        <h1 className={"idleFont"}>Have a look above you</h1>
                    </div>
                </div>
                </Link>
            </div>

        );

}
