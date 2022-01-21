import React, {useEffect} from "react";
import './Overview.css';
import { Link } from "react-router-dom";
import {startThreeJS} from "../components/threejs/three";

export function Idle (){
    useEffect(() => {
        startThreeJS();
    })

        return (
            <div className="component-display">
                <div id="three-js">
                </div>
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
