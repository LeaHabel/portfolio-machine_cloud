import React from "react";
// import { Video, ReactAudio} from "reactjs-media";
import ReactPlayer from 'react-player'

const MediaComponentSnippet = (props) => {
    return (
        <div>
            <ReactPlayer
                url={props.url}
                muted={true}
                width={props.width}
                height={props.height}
                light="http://placekitten.com/200/300"
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
