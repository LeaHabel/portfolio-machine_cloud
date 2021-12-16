import React from "react";
import './Overview.css';
import {Person} from "./Person";
import CloudIcon from "../assets/cloudiIcon.png";


 export function Overview (){

        return (
            <div className="component-display">
                <div id="majorButton">
                    <img className="icon" src={CloudIcon}/>
                    <h4>Major</h4>
                </div>
                <Person/>
            </div>
        );

}
