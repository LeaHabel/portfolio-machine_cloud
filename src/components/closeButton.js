import CloudIcon from "../assets/CloseBTN.svg";
import '../pages/Overview.css';

export function CloseButton (){

    return (

        <div id="majorButton">
            <img className="icon icon-close" src={CloudIcon}/>
            <h4>Major</h4>
        </div>
    );

}
