import React from "react";
//import './Select.css';
//import './animation.sass';
import CloudIcon from '../assets/cloudiIcon.png'
import frame from "../assets/frame.png";
import {Cloudbutton} from "../components/cloudbutton";
import {ReactCSSTransitionGroup} from 'react-transition-group'; // ES6
export function Select (){

    return (
<div>

          {/* <div className="video-button" data-aperture="closed">
           <div className="video-container">
                <video className="actual-video" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/502545/Oculus.mp4"
                       poster="https://assets.codepen.io/502545/2021-02-08_20-46-41.jpg">
                </video>
                <div className="play-button__aperture--left"></div>
                <div className="play-button__aperture--top-right"></div>
                <div className="play-button__aperture--bottom-right"></div>
            </div>*/}
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <h1>Fading at Initial Mount</h1>
            </ReactCSSTransitionGroup>
</div>
    );

}
