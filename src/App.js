// import "./App.css";
import Header from "./components/Header";
import Constructor from "./components/Constructor";
import Calculator from "./components/Calculator";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Input from "./components/Input";
import Operations from "./components/Operations";
import Equal from "./components/Equal";
import Numbers from "./components/Numbers";
import { createContext, useReducer } from "react";
import { initialState } from "./state/state";
import { reducer } from "./state/reducer";
import { useDispatch, useSelector } from "react-redux";
import { constructorSVG, runtimeSVG } from "./image";
import { changeAppMode, CONSTRUCTOR, RUNTIME } from "./redux/app_reducer";
import s from "./App.module.css"

function App() {
  const dispatch = useDispatch()
  const appMode = useSelector(state => state.appMode)
  
  const styleActive = {
      background: "#FFFFFF",
      border: "1px solid #E2E3E5" 
    }

    const styleDeactive = {
      // background: "#FFFFFF",
      // border: "1px solid #E2E3E5" 
    }

  const onBtnClick = (e) => {

    

    if (e.target.className == `${s.btn} ${s.rt}` ) {
        dispatch(changeAppMode(RUNTIME))
    } else dispatch(changeAppMode(CONSTRUCTOR))

    // (appMode === RUNTIME) ? e.target.style =  "background: #FFFFFF": undefined
    
    // e.target.style =  "border: 1px solid #E2E3E5"
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={s.App}>
        <div className={s.header}>
          <div className={s.btnContainer}>
            <div className={s.active1}  onClick={ (e) => onBtnClick(e) }>{runtimeSVG} Runtime</div>
            <div className={`${s.btn}`}  onClick={ (e) => onBtnClick(e)}>{constructorSVG} Constructor</div>
          </div>
        </div>
        <div className={s.content}>
          <Constructor disabled={true} className={s.constructor} />
          <Calculator className={s.calculator} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
