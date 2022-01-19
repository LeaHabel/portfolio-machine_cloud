import React from "react";
import './Overview.css';
import {Person} from "../components/Person";
import CloudIcon from "../assets/cloudiIcon.png";
import frame from "../assets/frame.png";
import {Cloudbutton} from "../components/cloudbutton";
import {CloseButton} from "../components/closeButton";
import {Link} from "react-router-dom";
import BGsimple from "../assets/BGsimple.png";

export function Overview (){

    return (
        <div className="component-display">
            <img className="background-specs" src={BGsimple} alt="Water Background"/>
            <Cloudbutton/>


            <Person/>

        </div>
    );

}
