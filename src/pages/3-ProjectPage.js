import React from "react";
import './3-ProjectPage.css'
import MaxMuster from "../assets/MaxMuster.png";
import PortfolioBG from "../assets/PortfolioBG.png";
import QRmm from "../assets/QRmm.png";
import MAILicon from "../assets/MAILicon.png"
import IGicon from "../assets/IGicon.png"
import WEBicon from "../assets/WEBicon.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import Next from "../assets/Next.svg"
import Previous from "../assets/Previous.svg"
import IconMajorBTN from "../assets/IconMajorBTN.svg"
import CloseBTN from "../assets/CloseBTN.svg"

export function Portfolio() {

    return (
        <>
            <img className="background-specs" src={PortfolioBG} alt="Portfolio Background"/>
            <div className="contact">
                <img className="profil" src={MaxMuster} alt="Profil"/>
                <h1 className="head1">Max Mustermann</h1>
                <p className="head3">Communication Design</p>
                <p className="paragraphw"><img className="icons" src={MAILicon} alt="Mail"/>max.mustermann@gmail.com</p>
                <p className="paragraphw"><img className="icons" src={IGicon} alt="Instagram"/>Maxmustermann</p>
                <p className="paragraphw"><img className="icons" src={WEBicon} alt="Website"/>www.maxmustermann.com</p>
                <p className="head2">Skills</p>
                <p className="paragraphw">App Design, Screen Design, 2D/3D Animation, Projection Mapping</p>
                <img className="QR" src={QRmm} alt="QR Code"/>
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
                <p className="arrows"><img className="arrows" src={Previous} alt="Previous"/><img className="arrows"
                                                                                                  src={Next}
                                                                                                  alt="Next"/></p>
            </div>

            <div>
                <div>
                    <img className="mediafile1" src={img1} alt="Projectmedia"/>
                    <img className="mediafile2" src={img2} alt="Projectmedia"/>
                </div>
                <img className="mediafile3" src={img3} alt="Projectmedia"/>
            </div>

            <div>
                <img className="cloudbtn" src={IconMajorBTN} alt="Back to cloud"/>
                <img className="closebtn" src={CloseBTN} alt="Back to cloud"/>
            </div>
        </>
    )
        ;
}