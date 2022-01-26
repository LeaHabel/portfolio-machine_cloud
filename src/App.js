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
    const location = useLocation();

    const [selectedMajor, setSelectedMajor] = useState(0)




    // React.useEffect(() => {
    //     //localStorage.setItem('myData', JSON.stringify(data))
    // })



    let data = localStorage.getItem('data')
    //localStorage.setItem('data', data) //for testing
    console.log("data ----", data)

    if (!selectedMajor) {
        data = parseInt(data)
        setSelectedMajor(data)
    }


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