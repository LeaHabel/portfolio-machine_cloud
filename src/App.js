import './App.css';
import BGsimple from "./assets/BGsimple.png";
import puddle from "./assets/puddle.png";
import { Overview } from './pages/1-Overview';

import Idle from "./pages/0-Idle.js"
import Overview from "./pages/1-Overview"
import Search from "./pages/1.2-Search"
import Portfolio from "./pages/3-ProjectPage"

function App() {
  return (
    <>
      <content>
        <img className="background" src={BGsimple} alt="Water Background" />

        {/* As long as we don't have buttons to navigate from Idle to > Overview to > Search and so on: 
        While working on your branch you can add the component you are currently working on here. 
        For example: 
        <MyComponent />
        Don't forget to import your component. As soon as we have the routing/links through our pages we can do it "correctly" */}
        <Overview />
        <img className="puddle-overlay" src={puddle} alt="Puddle Mask" />
      </content>
    </>

  );
}

export default App;