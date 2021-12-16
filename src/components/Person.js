import React from "react";
import './Overview.css';


export function Person (){

    return (

<div className="person big">
    <div id="personName">
        <h1>Nicolas Saavedra-Rueda</h1>
        <h2>Interaction Design</h2>
    </div>
    <div className="personImage">
        <img src="/assets/img1.png"/>
        <img src={'./assets/img1.png'}/>
        <img src="/src/assets/img1.png"/>
    </div>
</div>
    );

}
