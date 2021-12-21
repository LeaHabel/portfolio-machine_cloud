import React from "react";
import './3-ProjectPage.css'
import MaxMuster from "../assets/MaxMuster.png";
import PortfolioBG from "../assets/PortfolioBG.png";
import QRmm from "../assets/QRmm.png";

export function Portfolio() {

    return (
        <>
            <img className="background-specs" src={PortfolioBG} alt="Portfolio Background"/>
            <div className="contact">
                <img className="profil" src={MaxMuster} alt="Profil"/>
                <h1 className="head1">Max Mustermann</h1>
                <p className="head3">Communication Design</p>
                <p className="paragraphw">max.mustermann@gmail.com</p>
                <p className="paragraphw">Maxmustermann</p>
                <p className="paragraphw">www.maxmustermann.com</p>
                <p className="head2">Skills</p>
                <p className="paragraphw">App Design, Screen Design, 2D/3D Animation, Projection Mapping</p>
                <img src={QRmm} alt="QR"/>
                <p className="paragraphw">Save Details</p>
            </div>

            <div className="projectinfo">
                <h1 className="head4">Project Title</h1>
                <p className="head3">Communication Design</p>
                <p className="paragraphb">Here is a short project description, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                    consetetur sadipscing elitr.</p>
                <p className="paragraphbold">2021 | Sem X</p>
                <p className="paragraphbold">Own role</p>
                <p className="paragraphb">Lorem ipsum, dolor sit amet, consectetur, adipiscing elit</p>
                <p className="paragraphbold">Team</p>
                <p className="paragraphb">Name Lastname, Name Lastname, Name Lastname</p>
            </div>

            <div className="projectmedia">
                <div className="twoMedia">
                    <img className="mediafiles" src={MaxMuster} alt="Projectmedia"/>
                    <img className="mediafiles" src={MaxMuster} alt="Projectmedia"/>
                </div>
                <img className="mediafiles" src={MaxMuster} alt="Projectmedia"/>
            </div>
        </>
    )
        ;
}