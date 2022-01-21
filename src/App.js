import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import  {Portfolio}  from "./pages/3-ProjectPage";
import reportWebVitals from './reportWebVitals';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";
import {Idle} from "./pages/0-Idle";
import {Overview} from "./pages/1-Overview";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'


function App() {
    var Id;
    const location = useLocation();
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Idle/>}/>
                    <Route path="/overview" element={<Overview/>}/>
                    <Route path={"/profil/:id"} element={<Portfolio/>}/>

                </Routes>
            </AnimatePresence>

        </>
    );
}

export default App;