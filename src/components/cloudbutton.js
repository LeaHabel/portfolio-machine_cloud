import CloudIcon from "../assets/IconMajorBTN.svg";
import '../pages/Overview.css';
import { Link } from "react-router-dom";

export function Cloudbutton (){

    return (
        <Link to="/overview">
        <div id="majorButton">

            <img className="icon" src={CloudIcon}/>
            <h2 class={"major"}>Major</h2>

        </div>
        </Link>
    );

}
