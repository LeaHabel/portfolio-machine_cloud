import React, { useState } from "react";
import './3-ProjectPage.css'
import MaxMuster from "../assets/MaxMuster.png";
import PortfolioBG from "../assets/PortfolioBG.png";
import QRmm from "../assets/QRmm.png";
import MAILicon from "../assets/MAILicon.png"
import IGicon from "../assets/IGicon.png"
import WEBicon from "../assets/WEBicon.png"
import projIMG1 from "../assets/projIMG1.png"
import projIMG2 from "../assets/projIMG2.png"
// import projIMG3 from "../assets/projIMG3.png"
import Next from "../assets/Next.svg"
import Previous from "../assets/Previous.svg"
import { Cloudbutton } from "../components/cloudbutton";
import { CloseButton } from "../components/closeButton";
import Zoom from 'react-reveal/Zoom';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import data from '../assets/data/personDataV3-communication.json';
import dataInteraction from '../assets/data/personDataV3-interaction.json';
import dataMedia from '../assets/data/personDataV3-media.json';
import dataSound from '../assets/data/personDataV3-sound.json';
import data1 from '../assets/data/projectDataV2.json';
import MediaComponent from '../components/MediaComponent';
import { useLocation, useParams } from 'react-router-dom';
import { currentMajor } from "../components/currentMajor";

import FindProjectFromPerson from "../components/FindProjectFromPerson";

export function Portfolio(props) {
    let { id } = useParams()
    let _id = id - 1

    //nächstes Proejct
    const nextProject = () => {
        if (choosenProject < 3 && currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].projects[choosenProject + 1] !== null) {
            setcchoosenProject(choosenProject + 1);
            document.getElementById("prevButton").style.opacity = "1";
            document.getElementById("prevButton").style.pointerEvents = "initial";
            console.log("BLAA " + img1.src)
            setimgPos1(null)
            setimgPos2(null)
            setimgPos3(null)
            if (choosenProject == 1 || currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].projects[choosenProject + 2] == null) {
                document.getElementById("nextButton").style.opacity = "0";
                document.getElementById("nextButton").style.pointerEvents = "none";
            }
        }

        // document.getElementById("mediafile2").src;
    }
    //vorheriges Proejct
    const prevProject = () => {
        if (choosenProject > 0) {
            setcchoosenProject(choosenProject - 1);
            document.getElementById("nextButton").style.opacity = "1";
            document.getElementById("nextButton").style.pointerEvents = "initial";
            setimgPos1(null)
            setimgPos2(null)
            setimgPos3(null)
            if (choosenProject == 1) {
                document.getElementById("prevButton").style.opacity = "0";
                document.getElementById("prevButton").style.pointerEvents = "none";
            }
        }

    }

    console.log("State: " + id)
    console.log("State2: " + _id)
    const bodyVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: .9 }
        },
        exit: {
            y: '200vh',
            transition: { ease: 'easeInOut', duration: .6 },
            scale: 0.1
        }
    }
    const [choosenProject, setcchoosenProject] = useState(0);
    var results = [];
    results = data1.PROJECT_DETAILS.find(record => record.PID === currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].projects[choosenProject])


    const [imgPos1, setimgPos1] = useState(0)
    const [imgPos2, setimgPos2] = useState(0)
    const [imgPos3, setimgPos3] = useState(0)
    const [QR, setQR] = useState(0)
    var isLandscapeBoolean
    var loadOnce = true
    var videoPos1
    var loadOnce2
    var loadOnce3
    var ifQrCode
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const placeholder = new Image();

    function ifQRCode() {
        if(currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].qr !== null) {
             ifQrCode = true;
            console.log("QR " + ifQrCode)
        }
    }
    //wenn !videoPos1 -> wenn kein Video an 1. Stelle
    img1.src = "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"];


    img1.onload = () => {
        if (img1.width / img1.height <= 1) {
            isLandscapeBoolean = false;
            setimgPos2(img1.src) //is portrait -> pos2
            // console.log("BLA imgpos2 " + imgPos2)
        } else {
            isLandscapeBoolean = true;
            setimgPos1(img1.src) //is landscape ->pos1
            // console.log("BLA imgpos1 " + imgPos1)

        }

    };

    if (videoPos1) {
        setimgPos1(placeholder)
    }



    img2.src = "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_2"];

    img2.onload = () => {

        if (img2.width / img2.height <= 1) {
            isLandscapeBoolean = false;
            setimgPos2(img2.src) //is portrait -> pos2
        } else {
            isLandscapeBoolean = true; //is landscape
            if (imgPos1 == null) { //if pos1 is still empty
                setimgPos1(img2.src)  //pos1

            } else {
                setimgPos3(img2.src) //else pos3
            }
        }

    };

    img3.src = "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_3"];
    if (img3.src == null) {
        console.log("Pos imgPos2 ist null")

    }
    img3.onload = () => {

        if (img3.width / img3.height <= 1 && loadOnce === true) { //first iteration
            isLandscapeBoolean = false;
            loadOnce = false;
            setimgPos2(img3.src) //is portrait -> pos2
        } else if (loadOnce === true) { //first iteration
            loadOnce = false;
            isLandscapeBoolean = true; //is landscape
            if (imgPos1 == null) {
                setimgPos1(img3.src) //if pos1 empty -> pos1
            }
            else if (imgPos3 == null) {
                setimgPos3(img3.src) //if pos3 empty -> pos3 
            }
        }
        loadOnce = false;

    };









    var results = [];
    results = data1.PROJECT_DETAILS.find(record => record.PID === currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].projects[choosenProject])


    function checkForVideo(checkFile) {
        let fileExtension = checkFile.split('.').pop();
        let projectIndex = checkFile.split('-').pop();
        projectIndex = projectIndex.charAt(0);


        if (fileExtension === "mp4" || fileExtension === "mov") {
            videoPos1 = true;
            return (<motion.div exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1}} className="mediafile mediafile1">

                <MediaComponent
                    url={"https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"]}
                    width="auto"
                    height="300px"
                />
            </motion.div>
            )
        } else if (fileExtension === "jpg" || fileExtension === "png") {
            return       <AnimatePresence> <motion.img exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1}} id="changePos" className="mediafile mediafile1" src={imgPos1} alt="Projectmedia" />      </AnimatePresence>
        } else if (!checkFile) {
            return null
        }
    }



    return (
        <div className="Portfolio">
            <motion.div variants={bodyVariants} initial="hidden" animate="visible" exit={"exit"} className="overflow">
                <Zoom>
                    <>
                        <img className="background-specs" src={PortfolioBG} alt="Portfolio Background" />
                        <div className="contact">
                            <img className="profil" src={"https://d18p28upkrc95t.cloudfront.net/persons/" + currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].profilepic} alt="Profil" />
                            <h1 className="head1"> {currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].FirstName} {currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].Surname}</h1>
                            <p className="head3">{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].Major}</p>
                            <p className="paragraphw"><img className="icons" src={MAILicon}
                                alt="Mail" />{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].Mail}
                            </p>
                            <p className="paragraphw"><img className="icons" src={IGicon}
                                alt="Instagram" />{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].SocialMedia}</p>
                            <p className="paragraphw"><img className="icons" src={WEBicon}
                                alt="Website" />{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].Website}</p>
                            <p className="head2">Skills</p>
                            <p className="paragraphw">{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].Skills}</p>
                            {ifQRCode()}
                            {ifQrCode ?
                                <>
                                <img className="QR" id={"QR"} src={"https://d18p28upkrc95t.cloudfront.net/qr/" + currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].qr} alt="QR Code" />
                                    <p className="paragraphw">Save Details</p>
                                </>
                                :
                                null
                            }

                        </div>

                        <div className="projectinfo">
                            <h1 className="head4">{results["Project"]}</h1>
                            <p className="head3">{results["University"]}</p>
                            <p className="paragraphb">{results["description"]}</p>
                            <p className="paragraphbold">{results["Year"]} |
                                Sem {results["Semester"]}</p>
                            <p className="paragraphbold">Own role</p>
                            <p className="paragraphb">{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].ownroles[choosenProject]}</p>
                            <p className="paragraphbold">Team</p>
                            <p className="paragraphb">{results["Team"]}</p>
                            <p className="arrows">
                                <img id={"prevButton"} onClick={() => prevProject()} className="arrows" src={Previous} alt="Previous" />
                                <img onClick={() => nextProject()}
                                    className="arrows"
                                    id={"nextButton"}
                                    src={Next}
                                    alt="Next" /></p>
                        </div>

                        <div>
                            <div className="mediaRow">

                                {checkForVideo(results["Mediafile_1"])}
                                <AnimatePresence>
                                {imgPos2 ?
                                    <motion.img exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1}} className="mediafile mediafile2" id={"mediafile2"} src={imgPos2} alt="Projectmedia" />
                                    :
                                    null
                                }
                                </AnimatePresence>
                            </div>
                            <AnimatePresence>
                            {imgPos3 ?
                                <motion.img exit={{ opacity: 0 }} initial={{opacity: 0 }} animate={{opacity: 1}} className=" mediafile mediafile3" id={"mediafile3"} src={imgPos3} alt="Projectmedia" />
                                :
                                null
                            }
                            </AnimatePresence>
                        </div>
                    </>
                </Zoom>
                <div>
                    <Cloudbutton />
                    <CloseButton />
                </div>
            </motion.div>
        </div>
    )
}