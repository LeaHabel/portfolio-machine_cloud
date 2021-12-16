import logo from './logo.svg';
import './App.css';
import {Overview} from './components/Overview.js';
import {Idle} from './components/Idle.js';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <Overview/>
      </header>
    </div>
  );
}

export default App;
