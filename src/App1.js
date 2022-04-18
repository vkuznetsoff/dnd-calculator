import './App.css';
import Header from './components/Header';
import Constructor from './components/Constructor';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="content">
        <Constructor className="constructor" />
        <Calculator className="calculator" />
      </div>

    </div>
  );
}

export default App;
