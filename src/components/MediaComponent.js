import React from "react";
// import { Video, ReactAudio} from "reactjs-media";
import ReactPlayer from 'react-player'

const MediaComponent = (props) => {
  return (
    <div>
      <ReactPlayer
        url={props.url}
        controls
        muted={true}
        width={props.width}
        height={props.height}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload noplaybackrate',
              disablepictureinpicture: 'true'
            }
          }
        }}
        onContextMenu={e => e.preventDefault()}
      />
    </div>
  );
};

export default MediaComponent;
