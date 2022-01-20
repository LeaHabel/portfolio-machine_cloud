import React, { useState } from "react";
import './Overview.css';
import {Person} from "../components/Person";
import CloudIcon from "../assets/cloudiIcon.png";
import frame from "../assets/frame.png";
import {Cloudbutton} from "../components/cloudbutton";
import {CloseButton} from "../components/closeButton";
import {Link} from "react-router-dom";
import BGsimple from "../assets/BGsimple.png";
import Zoom from 'react-reveal/Zoom';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

export function Overview (){
    const [isOpen, setIsOpen] = useState(false)

    const variants = {
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 1,
        transition:{delay: 1.5, duration: 1.5}
    },
    exit:{
        y: '200vh',
        x: '100vw',
        transition:{ease:'easeInOut'},
        scale: 5
    },
    cloud:{
        y: '200vh',
        transition:{ease:'easeInOut', duration: .6},
        scale: 0.1
    },
        open: {
            opacity: 1, y: '-200vh'},
        closed: { opacity: 0, x: "-100%" },
    }

    return (
        <div className="component-display">
            <img className="background-specs" src={BGsimple} alt="Water Background"/>
            <Cloudbutton onClick={() => setIsOpen(true)}/>
            <motion.div  exit={"exit"}
                             animate={isOpen ? "open" : "visible"}
                             variants={variants}>

                    <Person/>
            </motion.div>
        </div >
    );

}
