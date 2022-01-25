import React, { useEffect, useState, useRef } from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import './Overview.css';
import '../pages/position.css';
import { startThreeJS } from "../components/threejs/three";
import { Cloudbutton } from "../components/cloudbutton";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
import { currentMajor } from "../components/currentMajor";
import FindProjectFromPerson from "../components/FindProjectFromPerson";
import $ from "jquery"
import { Range } from 'react-range';
import random from 'utils.random';

export function Overview(props) {
   let size = random(0,25);
    useEffect(() => {
        startThreeJS();

        const script = document.createElement('script');

        script.src = "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);



    const variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5 }
        },
        exit: {
            opacity: 1
        },
        cloud: {
            y: '-200vh',
            transition: { ease: 'easeInOut', duration: .6 },
            scale: 0.1
        },
        open: {
            opacity: 1, y: '-200vh'
        },
        closed: { opacity: 0, x: "-100%" },
    }

   var isOpen = false
    var personOpen = false
    console.log("Cloud " + isOpen)
    function cloudClick(){
        if( isOpen = false){
            isOpen = true;
        }

        console.log("Cloud " + isOpen)
    }
    function PersonClick(){
        if( personOpen = false){
            personOpen = true;
        }

        console.log("Cloud " + isOpen)
    }const[y, setExit] = useState(0)
    return (
        <>
            <div className="component-display container">
                <div id="three-js" className={"person-list"}>
                </div>
                <Cloudbutton/>
                <div className={"people"}>
                {currentMajor(props.selectedMajor).PERSONAL_DETAILS.map((user) => (

                    <motion.div
                        exit="exit"
                        animate="visible"
                        variants={variants}
                        className="test">

                        <Person className={"personPosition"}

                            name={user.FirstName}
                            surname={user.Surname}
                            major={user.Major}
                            id={user.virtualID}
                            key={user.virtualID}
                            position={"pos" + user.virtualID}
                            randomPosition={size}

                            // Uff
                            projectMedia1_0={
                                FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia1_1={
                                FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia1_2={
                                FindProjectFromPerson(user.virtualID - 1, 0, props.selectedMajor)["Mediafile_3"]
                            }
                            // Imagine a smart function call here
                            projectMedia2_0={
                                FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia2_1={
                                FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia2_2={
                                FindProjectFromPerson(user.virtualID - 1, 1, props.selectedMajor)["Mediafile_3"]
                            }
                            // copy the pasta the hell out of it 
                            projectMedia3_0={
                                FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_1"]
                            }
                            projectMedia3_1={
                                FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_2"]
                            }
                            projectMedia3_2={
                                FindProjectFromPerson(user.virtualID - 1, 2, props.selectedMajor)["Mediafile_3"]
                            }
                            clickedID={user.virtualID}
                            selectedMajor={props.selectedMajor}
                        />
                    </motion.div>
                ))}
                </div>
            </div>
        </>
    );
}


