import React, {useEffect} from "react";
import './Overview.css';
import { Link } from "react-router-dom";
import {startThreeJS} from "../components/threejs/three";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
export function Idle (){
    useEffect(() => {
        startThreeJS();

    })
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
        return (
            <motion.div variants={bodyVariants} initial="hidden" animate="visible" exit={"exit"} className="component-display">
                <div id="three-js">
                </div>
                <Link to={"/overview"}>
                <div className="idle-bubble absolute">
                    <div id="idletext">
                        <h1 className={"idleFont"}>Have a look above you</h1>
                    </div>
                </div>
                </Link>
            </motion.div>

        );

}
