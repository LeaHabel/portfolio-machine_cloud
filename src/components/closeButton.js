import CloudIcon from "../assets/CloseBTN.svg";
import '../pages/Overview.css';
import { Link } from "react-router-dom";

export function CloseButton (){

    return (
        <Link to="/overview">
        <div id="majorButton" className="icon-close">

            <img className="icon" src={CloudIcon}/>

        </div>
        </Link>
    );

}
