import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      <SayMyName nome="Matheus"></SayMyName>
      <Pessoa
        nome="Matheus"
        idade="16"
        profissão="Font End Developer"
        foto="https://via.placeholder.com/150">
        </Pessoa>
    </div>
  );
}

export default App;
