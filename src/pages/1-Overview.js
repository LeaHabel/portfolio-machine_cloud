import React from "react";
import '../../src/App.css';
import { Person } from "../components/Person";
import CloudIcon from "../assets/cloudiIcon.png";
import frame from "../assets/frame.png";

import Img1 from '../assets/img1.png'

import PersonData from '../assets/data/personDataV2.json'
import ProjectData from '../assets/data/projectDataV2.json'
import CommunicationDesigners from '../assets/data/personDataV3-communication.json'

export function Overview() {

    var initID = 0;
    var majorSize = 16;

    var currentMajor = 1; //1=CD, 2=MD, 3=SD, 4=ID 

    //console.log(CommunicationDesigners.PERSONAL_DETAILS[0].FirstName)

    //iterates over each student. But does it all at once. Need to solve it with state? Or map over each student somehow
    function currentStudentID() {
        while (initID != majorSize) {
            initID++;
        }
        // console.log(initID)
        return initID
    }

    //console.log(CommunicationDesigners.PERSONAL_DETAILS[0].project_1)

    function findCorrectProject(CommunicationDesigners, ProjectData, studentID) {
        console.log("CommunicationDesigners " + CommunicationDesigners.length)
        console.log("studentID " + studentID)
        for (var j = 0; j < CommunicationDesigners.length; j++) {
            for (var k = 0; k < CommunicationDesigners.length; k++) {
                if (CommunicationDesigners.PERSONAL_DETAILS[studentID - 1].project_1 == ProjectData.PROJECT_DETAILS.PID) {
                    return console.log("true")
                } else {
                    return false
                }

            }

        }

    }

    //finds out which major each person belongs to, but also does it all at once. Is needed to find out how big the majorSize is.
    for (var i = 0; i < PersonData.PERSONAL_DETAILS.length; i++) {
        if (PersonData.PERSONAL_DETAILS[i].Major == "Communication Design") { //10
            currentMajor = 1;
        } else if (PersonData.PERSONAL_DETAILS[i].Major == "Media Design") { //10
            currentMajor = 2;
        } else if (PersonData.PERSONAL_DETAILS[i].Major == "Sound Design") { //7
            currentMajor = 3;
        } else if (PersonData.PERSONAL_DETAILS[i].Major == "Interaction Design") { //17
            currentMajor = 4;
        } else {
            console.log("Misspelled major detected. BOOM! ")
        }
    }


    return (
        <>
            <div className="component-display">
                <div id="majorButton">
                    <img className="icon" src={CloudIcon} />
                    <h4>Send back to cloud</h4>
                </div>

                {CommunicationDesigners.PERSONAL_DETAILS.map((user) => (
                    <Person
                        name={user.FirstName}
                        major={user.Major}
                        position={"pos" + user.virtualID}
                        img1URL={Img1}
                        key={user.virtualID}
                        projectMedia={
                            findCorrectProject(ProjectData, user.virtualID) ? null : null
                        }

                    />
                ))}
            </div>




        </>
    );

}
