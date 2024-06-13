import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Contato from './components/Contato';
import Empresa from './components/Empresa'
import Navbar from './components/Navbar';
import SectionPartners from './components/SectionPartners';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Contato' element={<Contato/>}></Route>
          <Route path='/Empresa' element={<Empresa/>}></Route>
        </Routes>
      </Router>
      
      <SectionPartners></SectionPartners>
    </div>
  );
}

export default App;
