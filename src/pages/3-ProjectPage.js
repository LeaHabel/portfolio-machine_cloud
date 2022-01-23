import React, {useState} from "react";
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
import {useLocation, useParams} from 'react-router-dom';
//import FindProjectFromPerson from '../components/FindProjectFromPerson';

export function Portfolio() {
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
     const [choosenProject, setcchoosenProject] =useState(0);
    var results = [];
    results = data1.PROJECT_DETAILS.find( record => record.PID === data.PERSONAL_DETAILS[_id].projects[choosenProject])


    const[imgPos1, setimgPos1] = useState(0)
    const [imgPos2, setimgPos2] = useState(0)
    const [imgPos3, setimgPos3] = useState(0)
    var isLandscapeBoolean
    var loadOnce = true
    var loadOnce2
    var loadOnce3
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();


    img1.src = "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"];
    img1.onload = () => {
        console.log("Img1")
        if (img1.width / img1.height <= 1) {
            isLandscapeBoolean = false;
            setimgPos2(img1.src)
            console.log("Hochformatbild " + imgPos2)
        } else {
            isLandscapeBoolean = true;
            setimgPos1(img1.src)
            console.log("Querformatbild 1 " + imgPos1)

        }

    };



        console.log("Img2")
        img2.src = "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_2"];
        img2.onload = () => {

            if (img2.width / img2.height <= 1) {
                isLandscapeBoolean = false;
                setimgPos2(img2.src)
                console.log("Hochformatbild " + imgPos2)
            } else {
                isLandscapeBoolean = true;
                if (imgPos1 == null) {
                    setimgPos1(img2.src)
                    console.log("Querformatbild 1 " + imgPos1)
                } else {
                    setimgPos3(img2.src)
                    console.log("Querformatbild 3 " + imgPos3)
                }
            }

        };


if(loadOnce) {

    console.log("Img3")
    img3.src = "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_3"];
    img3.onload = () => {

        if (img3.width / img3.height <= 1 && loadOnce === true) {
            isLandscapeBoolean = false;
            loadOnce = false;
            setimgPos2(img3.src)
            console.log("Hochformatbild " + imgPos2)
        } else if (loadOnce === true) {
            loadOnce = false;
            isLandscapeBoolean = true;
            if (imgPos1 == null ) {
                setimgPos1(img3.src)
               console.log("Querformatbild 1 " + imgPos1)
            }
            else if (imgPos3 == null) {
                setimgPos3(img3.src)
               console.log("Querformatbild 3 " + imgPos3)
            }
        }
        loadOnce = false;
        console.log("LoadOnce " + loadOnce)
    };

}


    const [disable, setDisable] = React.useState(false);
    //nächstes Proejct
    const nextProject = () => {
        let click = 0
    if (choosenProject < 3 && data.PERSONAL_DETAILS[_id].projects[choosenProject+1] !== null) {
        console.log("New Next 1: " + choosenProject);
        click++
        setcchoosenProject(choosenProject+1);
        console.log("New Next Click: " + click);
        console.log("New Next: " + data.PERSONAL_DETAILS[_id].projects[choosenProject]);
        console.log("New Next PROJECT: " + results["Project"]);

        document.getElementById("prevButton").style.opacity = "1";

        if (click == 2 || data.PERSONAL_DETAILS[_id].projects[choosenProject] == null){
            console.log("ENDE")
            setDisable(true)
            document.getElementById("nextButton").style.opacity = "0.5";
            document.getElementById("nextButton").disabled = true;
        }
    }


       // document.getElementById("mediafile2").src;
    }
    //vorheriges Proejct
    const prevProject = () => {
        if (choosenProject > 0) {
            setcchoosenProject(choosenProject-1);
            console.log("New Prev PROJECT: " + choosenProject);
            document.getElementById("nextButton").style.opacity = "1";
        }
        if (choosenProject == 0 || data.PERSONAL_DETAILS[_id].projects[choosenProject+1] == null){
            document.getElementById("prevButton").style.opacity = "0.5";
        }
    }

    var results = [];
     results = data1.PROJECT_DETAILS.find( record => record.PID === data.PERSONAL_DETAILS[_id].projects[choosenProject])

    const length = data.PERSONAL_DETAILS[_id].projects.length;
   // console.log("Array "+ "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_3"])

  //  console.log("filelink: " + "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"])


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
                            <p className="head3">{data.PERSONAL_DETAILS[_id].Major}</p>
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
                                <img       id={"prevButton"} onClick={() => prevProject()} className="arrows" src={Previous} alt="Previous"/>
                                <img onClick={() => nextProject()}
                                className="arrows"
                                     disabled={disable}
                                     id={"nextButton"}
                                src={Next}
                                alt="Next" /></p>
                        </div>

                        <div>

                            <div>
                                <div className="mediafile mediafile1">
                                   {/* <MediaComponent url="https://d18p28upkrc95t.cloudfront.net/projects/P62-1.mp4"/>*/}
                                    <img className="mediafile mediafile1"  src={ imgPos1 } alt="Projectmedia"/>
                                </div>
                                <img className="mediafile mediafile2"  src={ imgPos2 } alt="Projectmedia"/>
                            </div>
                            <img className=" mediafile mediafile3"  src={imgPos3} alt="Projectmedia"/>

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