import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { CONSTRUCTOR, RUNTIME, changeAppMode } from '../../redux/app_reducer';

import constructor from "../../assets/images/constructor.svg";
import runtime from "../../assets/images/runtime.svg";

import s from "./Header.module.css"


const Header = ({appMode}) => {

  const dispatch = useDispatch();
  // const appMode = useSelector(getAppMode);
  const isInputDropped = useSelector(state => state.app.isInputDrop)

  const onBtnClick = (e) => {
    if (e.target.className == `${s.btn}` && appMode == CONSTRUCTOR) {
      dispatch(changeAppMode(RUNTIME));
    } else dispatch(changeAppMode(CONSTRUCTOR));
  };

 
  const constructorBtnClassName =
    (appMode == CONSTRUCTOR )? `${s.btn} ${s.active}` : `${s.btn}`;
    
  const runtimeBtnClassName = 
    (appMode !== RUNTIME && !isInputDropped) ? `${s.btn} ${s.btnDeactive}` 
    : (appMode == RUNTIME) ? `${s.btn} ${s.active}` : s.btn;

  // const constructorClassName = (appMode == RUNTIME) ? s.constructor : undefined
  // const runtimeClassName = appMode == CONSTRUCTOR ? s.calcualtor :  undefined
    
  return (
    <div className={s.header}>
          <div className={s.btnContainer}>
            <div className={runtimeBtnClassName} onClick={(e) => onBtnClick(e)}>
               <img src={runtime} /> Runtime
            </div>
            <div
              className={constructorBtnClassName}
              onClick={(e) => onBtnClick(e)}
            >
              <img src={constructor} /> Constructor
            </div>
          </div>
        </div>
      
    )
}

export default Header