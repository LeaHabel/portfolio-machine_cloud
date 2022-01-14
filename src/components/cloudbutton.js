import CloudIcon from "../assets/IconMajorBTN.svg";
import '../pages/Overview.css';

export function Cloudbutton (){

    return (

        <div id="majorButton">
            <img className="icon" src={CloudIcon}/>
            <h4>Major</h4>
        </div>
    );

}
