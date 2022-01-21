import React, { useEffect, useState } from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import './Overview.css';
import { startThreeJS } from "../components/threejs/three";

import Img1 from '../assets/img1.png'

import PersonData from '../assets/data/personDataV2.json'
import ProjectData from '../assets/data/projectDataV2.json'
import CommunicationDesigners from '../assets/data/personDataV3-communication.json'
import { Cloudbutton } from "../components/cloudbutton";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

export function Overview() {
    useEffect(() => {
        startThreeJS();
    })

    const [isOpen, setIsOpen] = useState(false)

    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5 }
        },
        exit: {
            y: '200vh',
            x: '100vw',
            transition: { ease: 'easeInOut' },
            scale: 5
        },
        cloud: {
            y: '200vh',
            transition: { ease: 'easeInOut', duration: .6 },
            scale: 0.1
        },
        open: {
            opacity: 1, y: '-200vh'
        },
        closed: { opacity: 0, x: "-100%" },
    }


    function matchProjectToStudent(CommunicationDesigners, ProjectData, currStudentID) {
        for (var k = 0; k < CommunicationDesigners.PERSONAL_DETAILS.length; k++) {
            for (var j = 0; j < ProjectData.PROJECT_DETAILS.length; j++) {
                if (CommunicationDesigners.PERSONAL_DETAILS[k].project_1 == ProjectData.PROJECT_DETAILS[j].PID) {
                    if (currStudentID + 1 == k) {
                        console.log("https://d18p28upkrc95t.cloudfront.net/projects/" + ProjectData.PROJECT_DETAILS[j].Mediafile_1)
                        return "https://d18p28upkrc95t.cloudfront.net/projects/" + ProjectData.PROJECT_DETAILS[j].Mediafile_1
                    }

                } else {
                }
            }
        }
    }


    return (
        <>
            <div className="component-display">
                <div id="three-js">
                </div>
                <Cloudbutton onClick={() => setIsOpen(true)} />
                {CommunicationDesigners.PERSONAL_DETAILS.map((user) => (
                    <motion.div exit={"exit"}
                        animate={isOpen ? "open" : "visible"}
                        variants={variants} className="test "
                        key={user.virtualID}>
                        <Person
                            name={user.FirstName}
                            // user.ID an Portfolio Page geben
                            major={user.Major}
                            position={"pos" + user.virtualID}
                            img1URL={Img1}
                            projectMedia={
                                matchProjectToStudent(CommunicationDesigners, ProjectData, user.virtualID)
                            }

                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
}
