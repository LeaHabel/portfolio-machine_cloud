import React, { useEffect, useState } from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import './Overview.css';
import { startThreeJS } from "../components/threejs/three";
import ProjectData from '../assets/data/projectDataV2.json'
import { matchProjectToStudent } from '../../src/components/matchProjectToStudent.js'
import CommunicationDesigners from '../assets/data/personDataV3-communication.json'
import MediaDesigners from '../assets/data/personDataV3-media.json'
import SoundDesigners from '../assets/data/personDataV3-sound.json'
import InteractionDesigners from '../assets/data/personDataV3-interaction.json'
import { Cloudbutton } from "../components/cloudbutton";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'


export function Overview() {
    let selectedMajor = 1;

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

    const currentMajor = (selectedMajor) => {
        if (selectedMajor == 0) {
            return CommunicationDesigners;
        }
        if (selectedMajor == 1) {
            return MediaDesigners;
        }
        if (selectedMajor == 2) {
            return SoundDesigners;
        }
        if (selectedMajor == 3) {
            return InteractionDesigners;
        }

    }

    return (
        <>
            <div className="component-display">
                <div id="three-js">
                </div>
                <Cloudbutton onClick={() => setIsOpen(true)} />
                {currentMajor(selectedMajor).PERSONAL_DETAILS.map((user) => (
                    <motion.div exit={"exit"}
                        animate={isOpen ? "open" : "visible"}
                        variants={variants} className="test ">
                        <Person
                            name={user.FirstName}
                            major={user.Major}
                            position={"pos" + user.virtualID}
                            projectMedia1={
                                matchProjectToStudent(1, 1, currentMajor(selectedMajor), ProjectData, user.virtualID)
                            }
                            projectMedia2={
                                matchProjectToStudent(1, 2, currentMajor(selectedMajor), ProjectData, user.virtualID)
                            }
                            projectMedia3={
                                matchProjectToStudent(1, 3, currentMajor(selectedMajor), ProjectData, user.virtualID)
                            }
                            clickedID={user.virtualID}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
}
