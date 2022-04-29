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
import { createContext, useEffect, useReducer, useState } from "react";
import { initialState } from "./state/state";
import { reducer } from "./state/reducer";
import { useDispatch, useSelector } from "react-redux";
import { constructorSVG, runtimeSVG } from "./image";
import { changeAppMode, CONSTRUCTOR, RUNTIME } from "./redux/app_reducer";
import s from "./App.module.css";

const getAppMode = (state) => state.app.appMode;

function App(props) {
  const dispatch = useDispatch();
  const appMode = useSelector(getAppMode);
  // const [mode, setMode] = useState(appMode)
  //  useEffect( () => console.log('appMode',appMode),
  //  [appMode])

  // const style = {
  //   pointerEvents: "none"

  // }

  const onBtnClick = (e) => {
    if (e.target.className == `${s.btn}` && appMode == CONSTRUCTOR) {
      dispatch(changeAppMode(RUNTIME));
    } else dispatch(changeAppMode(CONSTRUCTOR));

    //  if (appMode == RUNTIME) {
    //    e.target.className = e.target.className + ' ' + s.active
    //  }
  };

  const constructorBtnClassName =
    appMode == CONSTRUCTOR ? `${s.btn} ${s.active}` : s.btn;
  const runtimeBtnClassName =
    appMode == RUNTIME ? `${s.btn} ${s.active}` : s.btn;

  const constructorClassName = (appMode == RUNTIME) ? s.constructor : undefined
  const runtimeClassName = appMode == CONSTRUCTOR ? s.calcualtor :  undefined

  // console.log('constructorClassName ', constructorClassName)
  // console.log('runtimeClassName ', runtimeClassName)

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={s.App}>
        <div className={s.header}>
          <div className={s.btnContainer}>
            <div className={runtimeBtnClassName} onClick={(e) => onBtnClick(e)}>
              {runtimeSVG} Runtime
            </div>
            <div
              className={constructorBtnClassName}
              onClick={(e) => onBtnClick(e)}
            >
              {constructorSVG} Constructor
            </div>
          </div>
        </div>
        <div className={s.content}>
          <div className={constructorClassName}>
            <Constructor />
          </div>
          <div className={runtimeClassName}>
            <Calculator />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
