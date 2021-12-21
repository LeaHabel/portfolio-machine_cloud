import CloudIcon from "../assets/cloudiIcon.png";
import '../pages/Overview.css';

export function CloseButton (){

    return (

        <div id="majorButton">
            <img className="icon" src={CloudIcon}/>
            <h4>Major</h4>
        </div>
    );

}
