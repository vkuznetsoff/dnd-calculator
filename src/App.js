import Constructor from "./components/Constructor/Constructor";
import Calculator from "./components/Calculator/Calculator";
import Header from "./Header/Header";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useSelector } from "react-redux";

import { CONSTRUCTOR, RUNTIME } from "./redux/app_reducer";

import s from "./App.module.css";

export const getAppMode = (state) => state.app.appMode;

const App = () => {
  const appMode = useSelector(getAppMode);

  const constructorClassName = (appMode == RUNTIME) ? s.constructor : undefined
  const runtimeClassName = appMode == CONSTRUCTOR ? s.calcualtor : undefined

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={s.App}>
        <Header appMode={appMode} />

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
