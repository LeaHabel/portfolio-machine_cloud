import React from "react";
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
const variants = {
    hidden:{
        opacity: 0,
    },
    visible:{
        opacity: 0,
        transition:{delay: 1.5, duration: 1.5}
    },
    exit:{
        y: '200vh',
        x: '100vw',
        transition:{ease:'easeInOut'},
        scale: 5
    }
    }
    return (
        <div className="component-display">
            <img className="background-specs" src={BGsimple} alt="Water Background"/>
            <Cloudbutton/>
            <motion.div variants={variants} animate={{ scale: 1.1}}  transition={{ duration: 1 }} exit={"exit"}>

                    <Person/>

            </motion.div>




        </div>
    );

}
