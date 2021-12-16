import logo from './logo.svg';
import './App.css';
import {Overview} from './components/Overview.js';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <Overview addTrip={this.triggerAddTripState}/>
      </header>
    </div>
  );
}

export default App;
