import logo from './logo.svg';
import './App.css';
import {Overview} from './pages/Overview.js';
import {Idle} from './pages/0-Idle.js';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <Idle/>
      </header>
    </div>
  );
}

export default App;
