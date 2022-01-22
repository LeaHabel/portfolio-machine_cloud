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
import projIMG3 from "../assets/projIMG3.png"
import Next from "../assets/Next.svg"
import Previous from "../assets/Previous.svg"
import { Cloudbutton } from "../components/cloudbutton";
import { CloseButton } from "../components/closeButton";
import Zoom from 'react-reveal/Zoom';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import data from '../assets/data/personDataV2.json';
import data1 from '../assets/data/projectDataV2.json';
import MediaComponent from '../components/MediaComponent';

export function Portfolio() {
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
    console.log(data.PERSONAL_DETAILS[0].Surname)
    console.log(data1.PROJECT_DETAILS[0].Project)

    const img = new Image();
    img.src = 'http://placekitten.com/1080/1920';

    img.onload = () => {
        console.log(img.height);
        console.log(img.width);
    };

    isLandscape(img);

    function isLandscape(imgtotest, isLandscapeBoolean) {
        //tolle Rechnung die rausfindet ob landscape
        if (imgtotest.width / imgtotest.height <= 1) {
            isLandscapeBoolean = false;
        }
        return (
            console.log(imgtotest + " Landscape: " + isLandscapeBoolean)
        )
    }

    console.log("yeah i'm working")

    return (
        <div className="Portfolio">
            <motion.div variants={bodyVariants} initial="hidden" animate="visible" exit={"exit"} className="overflow">
                <Zoom>
                    <>
                        <img className="background-specs" src={PortfolioBG} alt="Portfolio Background" />
                        <div className="contact">
                            <img className="profil" src={MaxMuster} alt="Profil" />
                            <h1 className="head1">{data.PERSONAL_DETAILS[0].Surname} {data.PERSONAL_DETAILS[0].FirstName}</h1>
                            <p className="head3">{data.PERSONAL_DETAILS[0].Major}</p>
                            <p className="paragraphw"><img className="icons" src={MAILicon}
                                alt="Mail" />{data.PERSONAL_DETAILS[0].Mail}
                            </p>
                            <p className="paragraphw"><img className="icons" src={IGicon}
                                alt="Instagram" />{data.PERSONAL_DETAILS[0].SocialMedia}</p>
                            <p className="paragraphw"><img className="icons" src={WEBicon}
                                alt="Website" />{data.PERSONAL_DETAILS[0].Website}</p>
                            <p className="head2">Skills</p>
                            <p className="paragraphw">{data.PERSONAL_DETAILS[0].Skills}</p>
                            <img className="QR" src={QRmm} alt="QR Code" />
                            <p className="paragraphw">Save Details</p>
                        </div>

                        <div className="projectinfo">
                            <h1 className="head4">{data1.PROJECT_DETAILS[52].Project}</h1>
                            <p className="head3">{data1.PROJECT_DETAILS[52].University}</p>
                            <p className="paragraphb">{data1.PROJECT_DETAILS[52].description}</p>
                            <p className="paragraphbold">{data1.PROJECT_DETAILS[52].Year} |
                                Sem {data1.PROJECT_DETAILS[52].Semester}</p>
                            <p className="paragraphbold">Own role</p>
                            <p className="paragraphb">{data.PERSONAL_DETAILS[0].ownrole_1}</p>
                            <p className="paragraphbold">Team</p>
                            <p className="paragraphb">{data1.PROJECT_DETAILS[52].Team}</p>
                            <p className="arrows"><img className="arrows" src={Previous} alt="Previous" /><img
                                className="arrows"
                                src={Next}
                                alt="Next" /></p>
                        </div>

                        <div>
                            <div>
                                {/*<div>*/}
                                {/*    /!*<MediaComponent/>*!/*/}
                                {/*    Media Component*/}
                                {/*</div>*/}
                                <MediaComponent />
                                <img className="mediafile1" src={projIMG3} alt="Projectmedia" />

                                <img className="mediafile2" src={projIMG2} alt="Projectmedia" />
                            </div>
                            <img className="mediafile3" src={projIMG1} alt="Projectmedia" />
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