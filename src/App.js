import './App.css';

import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Portfolio } from "./pages/3-ProjectPage";
import reportWebVitals from './reportWebVitals';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";
import { Idle } from "./pages/0-Idle";
import { Overview } from "./pages/1-Overview";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'
//import * as publicHTML from './cloudConnect.js'


function App() {
    // constructor(props) {
    // super(props);
    // this.state = { date: new Date() };

    let Id;
    const  [prevSelectedMajor, setPrevSelectedMajor]  =useState(6);
    const location = useLocation();

    const [selectedMajor, setSelectedMajor] = useState(6)

let calledOnce = false


    // React.useEffect(() => {
    //     //localStorage.setItem('myData', JSON.stringify(data))
    // })


    let data = localStorage.getItem('data')
    //localStorage.setItem('data', data) //for testing
    console.log("prevMajort" + prevSelectedMajor)

console.log("selectedMajor" + selectedMajor)
    console.log("data" + data)
    if (selectedMajor == 6) {
        data = parseInt(data);
        console.log("First time")
        setSelectedMajor(data);
        calledOnce = true;
        setPrevSelectedMajor(data);
    }

    function calledFromStorage (data) {
        if (selectedMajor !== prevSelectedMajor) {
            data = parseInt(data);
            console.log("SELECTED MAJOR != PREVMAJOR")
            setSelectedMajor(data);
            calledOnce = true;
            setPrevSelectedMajor(data);
        }
    }
React.useEffect(() => {
   // window.addEventListener('storage', () => {
    console.log("in use effect funct")
        calledFromStorage();
        console.log("LOCAL STORAGE " + localStorage.getItem('data'));
    //})
},[])





    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {/* <Routes location={} key={.key}>
                        <Route path="/" element={<Idle />} />
                        <Route path="/overview" element={<Overview selectedMajor={0} />} />
                        <Route path={"/profil/:id"} element={<Portfolio selectedMajor={0} />} />

                    </Routes> */}

                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Idle />} />
                    <Route path="/overview" element={<Overview selectedMajor={selectedMajor} />} />
                    <Route path={"/profil/:id"} element={<Portfolio selectedMajor={selectedMajor} />} />

                </Routes>
            </AnimatePresence>

        </>
    )


}

export default App;