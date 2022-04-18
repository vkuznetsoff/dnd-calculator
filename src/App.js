import './App.css';
import Header from './components/Header';
import Constructor from './components/Constructor';
import Calculator from './components/Calculator';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Input from './components/Input';
import Operations from './components/Operations';
import Equal from './components/Equal';
import Numbers from './components/Numbers';

const divList = [
  {
      id: "input",
      order: 1,
      component: <Input />

  },

  {
      id: "operations",
      order: 2,
      component: <Operations />

  },

  {
      id: "numbers",
      order: 3,
      component: <Numbers />

  },
  {
      id: "equal",
      order: 4,
      component: <Equal />

  }
]


function App() {
  return (
    <DndProvider backend={HTML5Backend} >
      <div className="App">

        <div className="content">

          <Constructor className="constructor" divList={divList} />
          <Calculator className="calculator" />

        </div>

      </div>

    </DndProvider>

  );
}

export default App;
