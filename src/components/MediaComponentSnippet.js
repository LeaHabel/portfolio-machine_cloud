import React from "react";
// import { Video, ReactAudio} from "reactjs-media";
import ReactPlayer from 'react-player'



const MediaComponentSnippet = (props) => {
    let filename = props.url.split('projects/').pop();
    filename = filename.slice(0, -4);

    return (
        <div>
            <ReactPlayer
                url={props.url}
                muted={true}
                width={props.width}
                height={props.height}
                light={filename}
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

export default MediaComponentSnippet;
