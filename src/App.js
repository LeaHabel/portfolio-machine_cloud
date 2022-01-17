import './App.css';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";
import {Portfolio} from "./pages/3-ProjectPage";
import {Overview} from "./pages/1-Overview";

function App() {
    return (
        <>
            <div>
                <content>
                    <img className="background-specs" src={BGsimple} alt="Water Background"/>
                    <Overview/>
                    <Portfolio className="content-specs"/>

                    <img className="puddle-overlay" src={puddle} alt="Puddle Mask"/>
                </content>
            </div>
        </>

    );
}

export default App;