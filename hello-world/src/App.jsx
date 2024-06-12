import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import { useState } from "react";

function App() {
  // const [nome, setNome] = useState('')
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </Router>
    </div>
  );
}

export default App;
