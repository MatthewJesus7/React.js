import './App.css';
import Lista from './components/Lista';

function App() {

  const meusItens = ['React', 'Vue', 'angular']

  return (
    <div className="App">
      <h1>Renderização De listas</h1>
      <Lista itens={meusItens}></Lista>
    </div>
  );
}

export default App;
