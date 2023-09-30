import './App.css';

import NavBar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
