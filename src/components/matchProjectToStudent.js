export const matchProjectToStudent = (projectnumber, mediaNumber, StudentData, ProjectData, currStudentID) => {
    for (var k = 0; k < StudentData.PERSONAL_DETAILS.length; k++) {
        for (var j = 0; j < ProjectData.PROJECT_DETAILS.length; j++) {

            //schön ist es nicht. Ich weiß. 
            if (StudentData.PERSONAL_DETAILS[k].projects[projectnumber - 1] == ProjectData.PROJECT_DETAILS[j].PID) {
                // console.log(k + " " + CommunicationDesigners.PERSONAL_DETAILS[k].FirstName + " " + ProjectData.PROJECT_DETAILS[j].PID + " " + ProjectData.PROJECT_DETAILS[j].Mediafile_1)
                if (currStudentID - 1 == k) { //get correct student 
                    if (mediaNumber == 1) {
                        return "https://d18p28upkrc95t.cloudfront.net/projects/" + ProjectData.PROJECT_DETAILS[j].Mediafile_1
                    } else if (mediaNumber == 2) {
                        return "https://d18p28upkrc95t.cloudfront.net/projects/" + ProjectData.PROJECT_DETAILS[j].Mediafile_2
                    } else if (mediaNumber == 3) {
                        return "https://d18p28upkrc95t.cloudfront.net/projects/" + ProjectData.PROJECT_DETAILS[j].Mediafile_3
                    }
                }
            }

        }

    }
}