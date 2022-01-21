import CloudIcon from "../assets/IconMajorBTN.svg";
import '../pages/Overview.css';
import { Link } from "react-router-dom";

export function Cloudbutton (){

    return (
        <Link to="/">
        <div id="majorButton" className={"icon-major"}>

            <img className="icon" src={CloudIcon}/>
            <h2 className={"major"}>Major</h2>

        </div>
        </Link>
    );

}
