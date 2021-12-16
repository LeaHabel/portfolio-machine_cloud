import React from "react";
import '../pages/Overview.css';
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'


export function Person (){

    return (

<div className="person big">
    <div id="personName">
        <h1>Nicolas Saavedra-Rueda</h1>
        <h2>Interaction Design</h2>
    </div>
    <div className="personImage">
        <div className="grid">
            <img className="grid1" src={Img3}/>
            <img className="grid2" src={Img1}/>
            <img className="grid3" src={Img3}/>
            <img className="grid4" src={Img2}/>
        </div>
    </div>
</div>
    );

}
