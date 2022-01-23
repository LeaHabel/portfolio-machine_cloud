import React from "react";
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


    const img = new Image();
    img.src = 'http://placekitten.com/1080/1920';

    img.onload = () => {
        console.log(img.height);
        console.log(img.width);
    };

    isLandscape(img);

    //nächstes Proejct
    const nextProject = () => {

        choosenProject++;
        console.log("COSSENPROJECT: " + choosenProject);
        // document.getElementById("mediafile2").src;
    }
    //vorheriges Proejct
    const prevProject = () => {
        choosenProject--;
        console.log("COSSENPROJECT: " + choosenProject);
    }

    function isLandscape(imgtotest, isLandscapeBoolean) {
        //tolle Rechnung die rausfindet ob landscape
        if (imgtotest.width / imgtotest.height <= 1) {
            isLandscapeBoolean = false;
        }
        return (
            console.log(imgtotest + " Landscape: " + isLandscapeBoolean)
        )
    }
    let choosenProject = 0;
    var results = [];
    results = data1.PROJECT_DETAILS.find(record => record.PID === data.PERSONAL_DETAILS[_id].projects[choosenProject])

    const length = data.PERSONAL_DETAILS[_id].projects.length;
    console.log("Array " + length)

    console.log("filelink: " + "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"])

    // console.log("yeah testing " + FindProjectFromPerson(_id, 0, props.selectedMajor)["PID"])

    //console.log("Projekte: " + data1.PROJECT_DETAILS[data.PERSONAL_DETAILS[_id].projects[0]].Project)
    return (
        <div className="Portfolio">
            <motion.div variants={bodyVariants} initial="hidden" animate="visible" exit={"exit"} className="overflow">
                <Zoom>
                    <>
                        <img className="background-specs" src={PortfolioBG} alt="Portfolio Background" />
                        <div className="contact">
                            <img className="profil" src={"https://d18p28upkrc95t.cloudfront.net/persons/" + data.PERSONAL_DETAILS[_id].profilepic} alt="Profil" />
                            <h1 className="head1"> {data.PERSONAL_DETAILS[_id].FirstName} {data.PERSONAL_DETAILS[_id].Surname}</h1>
                            <p className="head3">{currentMajor(props.selectedMajor).PERSONAL_DETAILS[_id].Major}</p>
                            <p className="paragraphw"><img className="icons" src={MAILicon}
                                alt="Mail" />{data.PERSONAL_DETAILS[_id].Mail}
                            </p>
                            <p className="paragraphw"><img className="icons" src={IGicon}
                                alt="Instagram" />{data.PERSONAL_DETAILS[_id].SocialMedia}</p>
                            <p className="paragraphw"><img className="icons" src={WEBicon}
                                alt="Website" />{data.PERSONAL_DETAILS[_id].Website}</p>
                            <p className="head2">Skills</p>
                            <p className="paragraphw">{data.PERSONAL_DETAILS[_id].Skills}</p>
                            <img className="QR" src={QRmm} alt="QR Code" />
                            <p className="paragraphw">Save Details</p>
                        </div>

                        <div className="projectinfo">
                            <h1 className="head4">{results["Project"]}</h1>
                            <p className="head3">{results["University"]}</p>
                            <p className="paragraphb">{results["description"]}</p>
                            <p className="paragraphbold">{results["Year"]} |
                                Sem {results["Semester"]}</p>
                            <p className="paragraphbold">Own role</p>
                            <p className="paragraphb">{data.PERSONAL_DETAILS[_id].ownroles[choosenProject]}</p>
                            <p className="paragraphbold">Team</p>
                            <p className="paragraphb">{results["Team"]}</p>
                            <p className="arrows">
                                <img onClick={() => prevProject()} className="arrows" src={Previous} alt="Previous" />
                                <img onClick={() => nextProject()}
                                    className="arrows"
                                    src={Next}
                                    alt="Next" /></p>
                        </div>

                        <div>
                            <div>
                                <div className="mediafile mediafile1">
                                    <MediaComponent
                                        url={"https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"]}
                                        width="auto"
                                        height="300px"
                                    />
                                </div>
                                <img className="mediafile mediafile2" src={"https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_2"]} alt="Projectmedia" />
                            </div>
                            <img className=" mediafile mediafile3" src={"https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_3"]} alt="Projectmedia" />
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