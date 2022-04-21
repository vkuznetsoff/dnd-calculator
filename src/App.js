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
import { createContext, useReducer } from 'react';
import { initialState } from './state/state';
import { reducer } from './state/reducer';
import { useDispatch, useSelector } from 'react-redux';






function App() {
  //console.log(store)
  // const dragElements = useSelector((state) => Object.values(state.dragElements))
  // const dropElements = useSelector((state) => state.dropElements)
  // const state = useSelector(state => state)
  // const dispatch = useDispatch()
  // console.log(state)
  
  // console.log('dragElements: ', dragElements)
  // console.log('dropElements: ',  dropElements)

  
  
  // const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        
        <div className="content">
         
            <Constructor className="constructor"  />
            <Calculator className="calculator" />

        </div>

      </div>

    </DndProvider>

  );
}

export default App;
