import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';

import Home from './components/pages/Home';
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'

function App() {
  return (
    <div>
    <Router>
      <Navbar></Navbar>
      
      <Container customClass="min-height">
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/Company" element={<Company />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route exact path="/NewProject" element={<NewProject />}></Route>
        </Routes>
      </Container>
    </Router>
    </div>
  );
}

export default App;
