import React from "react";
import data from "../assets/data/personDataV3-communication.json";
import dataInteraction from '../assets/data/personDataV3-interaction.json';
import dataMedia from '../assets/data/personDataV3-media.json';
import dataSound from '../assets/data/personDataV3-sound.json';
import data1 from '../assets/data/projectDataV2.json';
import { useParams } from "react-router-dom";

import { currentMajor } from "../components/currentMajor";



const FindProjectFromPerson = (personID, choosenProject, selectedMajor) => {

    var results = [];

    results = data1.PROJECT_DETAILS.find(record => record.PID === currentMajor(selectedMajor).PERSONAL_DETAILS[personID].projects[choosenProject])


    //console.log("filelink: " + "https://d18p28upkrc95t.cloudfront.net/projects/" + results["Mediafile_1"])
    return results;
};

export default FindProjectFromPerson;
