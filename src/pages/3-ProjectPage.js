import React from "react";
import './3-ProjectPage.css'
import MaxMuster from "../assets/MaxMuster.png";
import PortfolioBG from "../assets/PortfolioBG.png";

export function Portfolio() {

    return (
        <>
            <img className="background-specs" src={PortfolioBG} alt="Portfolio Background"/>
            <div className="contact">
                <img className="profil" src={MaxMuster} alt="Profil"/>
                <h1 className="head1">Max Mustermann</h1>
                <p className="paragraph">Communication Design</p>
            </div>

            <div className="projectinfo">
                <h1 className="head2">Max Mustermann</h1>
                <p className="paragraph">Communication Design</p>
            </div>

            <div className="projectmedia">
                <div className="twoMedia">
                    <img className="mediafiles" src={MaxMuster} alt="Projectmedia"/>
                    <img className="mediafiles" src={MaxMuster} alt="Projectmedia"/>
                </div>
                <img className="mediafiles" src={MaxMuster} alt="Projectmedia"/>
            </div>
        </>
    );
}