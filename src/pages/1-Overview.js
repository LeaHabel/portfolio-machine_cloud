import React, { useEffect, useState } from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import './Overview.css';
import { startThreeJS } from "../components/threejs/three";
import ProjectData from '../assets/data/projectDataV2.json'
import { matchProjectToStudent } from '../../src/components/matchProjectToStudent.js'
import { Cloudbutton } from "../components/cloudbutton";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { currentMajor } from "../components/currentMajor";
import FindProjectFromPerson from "../components/FindProjectFromPerson";
import $ from "jquery"

export function Overview(props) {
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



    return (
        <>
            <div className="component-display ">
                <div id="three-js" className={"person-list container"}>
                </div>
                <Cloudbutton onClick={() => setIsOpen(true)} />
                {currentMajor(props.selectedMajor).PERSONAL_DETAILS.map((user) => (
                    <motion.div exit={"exit"}

                        animate={isOpen ? "open" : "visible"}
                        variants={variants} className="test tile">
                        <Person className={"personPosition"}
                            name={user.FirstName}
                            surname={user.Surname}
                            major={user.Major}
                            id={user.virtualID}
                            key={user.virtualID}
                            position={"pos" + user.virtualID}

                            // Uff
                            projectMedia1_0={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia1_1={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia1_2={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_3"]
                            }
                            // Imagine a smart function call here
                            projectMedia2_0={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia2_1={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia2_2={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_3"]
                            }
                            // copy the pasta the hell out of it 
                            projectMedia3_0={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia3_1={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia3_2={
                                "https://d18p28upkrc95t.cloudfront.net/projects/" + FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_3"]
                            }
                            clickedID={user.virtualID}
                            selectedMajor={props.selectedMajor}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
}


