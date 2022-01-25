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


function App() {
    var Id;
    const location = useLocation();
    const [selectedMajor, setSelectedMajor] = useState(3); //this number has to change when Input comes from cloud
    return (
        <body>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Idle />} />
                    <Route path="/overview" element={<Overview selectedMajor={selectedMajor} />} />
                    <Route path={"/profil/:id"} element={<Portfolio selectedMajor={selectedMajor} />} />

                </Routes>
            </AnimatePresence>

        </body>
    );
}

export default App;