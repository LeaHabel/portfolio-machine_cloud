import CloudIcon from "../assets/IconMajorBTN.svg";
import '../pages/Overview.css';


export function Cloudbutton (){

    return (

        <div id="majorButton">
    <a href={"/1-Overview.js"}>
            <img className="icon" src={CloudIcon}/>
            <h2 class={"major"}>Major</h2>
    </a>
        </div>

    );

}
