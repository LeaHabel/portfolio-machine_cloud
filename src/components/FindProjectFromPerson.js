import React from "react";
import data from "../assets/data/personDataV3-communication.json";
import dataInteraction from '../assets/data/personDataV3-interaction.json';
import dataMedia from '../assets/data/personDataV3-media.json';
import dataSound from '../assets/data/personDataV3-sound.json';
import data1 from '../assets/data/projectDataV2.json';
import { useParams } from "react-router-dom";

import { currentMajor } from "../components/currentMajor";

//shall hold the current major 

const FindProjectFromPerson = () => {
    let { id } = useParams()
    let _id = id - 1

    console.log("State: " + id)
    console.log("State2: " + _id)

    let choosenProject = 0;
    var results = [];
    results = data1.PROJECT_DETAILS.find(record => record.PID === data.PERSONAL_DETAILS[_id].projects[choosenProject])
    const length = data.PERSONAL_DETAILS[_id].projects.length;
};
return results;

export default FindProjectFromPerson;
