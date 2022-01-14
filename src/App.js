import './App.css';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";
import {Portfolio} from "./pages/3-ProjectPage";

import Idle from "./pages/0-Idle.js"
import Overview from "./pages/1-Overview"
import Search from "./pages/1.2-Search"
import Portfolio from "./pages/3-ProjectPage"

function App() {
    return (
        <>
            <div>
                <content>
                    <img className="background-specs" src={BGsimple} alt="Water Background"/>
                    <Portfolio className="content-specs"/>
                    <img className="puddle-overlay" src={puddle} alt="Puddle Mask"/>
                </content>
            </div>
        </>

    );
}
//Nicolas Search Bar
import Search from './search';

const App = () => {
    return (
        <Search />
    );
}

export default App;