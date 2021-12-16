import './App.css';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";

function App() {
    return (
        <>
            <div className="background">
                <header>
                    <img className="background-specs" src={BGsimple} alt="Water Background"/>
                    <img className="puddle-overlay" src={puddle} alt="Puddle Mask"/>
                </header>
            </div>
        </>

    );
}

export default App;
