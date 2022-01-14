import './App.css';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";
import {Idle} from "./pages/0-Idle";
import {Overview} from "./pages/1-Overview";


function App() {
    return (
        <>
            <div>
                <content>
                    <img className="background-specs" src={BGsimple} alt="Water Background"/>
                    <Overview className="content-specs"/>

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