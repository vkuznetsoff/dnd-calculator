import Constructor from "./components/Constructor";
import Calculator from "./components/Calculator";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useDispatch, useSelector } from "react-redux";
import { constructorSVG, runtimeSVG } from "./image";
import { changeAppMode, CONSTRUCTOR, RUNTIME } from "./redux/app_reducer";
import s from "./App.module.css";

export const getAppMode = (state) => state.app.appMode;

const App = () => {
  const dispatch = useDispatch();
  const appMode = useSelector(getAppMode);
  const isInputDropped = useSelector(state => state.app.isInputDrop)

  const onBtnClick = (e) => {
    if (e.target.className == `${s.btn}` && appMode == CONSTRUCTOR) {
      dispatch(changeAppMode(RUNTIME));
    } else dispatch(changeAppMode(CONSTRUCTOR));
  };

  // useEffect(() => { 
  //   const btnCursor = (!isInputDropped) ? s.btnDeactive : s.btnActive
  // }, [isInputDropped]);

  const btnCursor = (!isInputDropped) ? s.btnDeactive : s.btnActive

  const constructorBtnClassName =
    (appMode == CONSTRUCTOR )? `${s.btn} ${s.active} ${btnCursor}` : `${s.btn}`;
    
  const runtimeBtnClassName = 
    (appMode == RUNTIME) ? `${s.btn} ${s.active} ${btnCursor}` : s.btn;

  const constructorClassName = (appMode == RUNTIME) ? s.constructor : undefined
  const runtimeClassName = appMode == CONSTRUCTOR ? s.calcualtor :  undefined

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
