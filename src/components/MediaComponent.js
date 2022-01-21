import React from "react";
import { ReactVideo, ReactAudio, YoutubePlayer } from "reactjs-media";

const MediaComponent = () => {
  return (
    <div>
      <YoutubePlayer src="https://www.youtube.com/watch?v=KNMbDIKJ6T0" />

      {/* This code below is for files external to Youtube videos */}

      {/* <ReactVideo
       src="https://www.example.com/video.mp4"
        poster="/poster.jpg"
      /> */}
      
      {/* This code below is for audio files  */}

      {/*    <ReactAudio
                src="/audio.mp4"
                poster="/poster.png"
                //you can pass in other props
            /> */}

      {/*In case you want to put pictures here is the code for that*/}
      
      {/*  <Image
                src="/image.jpg"
                //you can pass in other props
            /> */}
    </div>
  );
};

export default MediaComponent;
