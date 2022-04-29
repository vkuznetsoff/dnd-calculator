import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../App";
import { addElementAC } from "../redux/actions";
import { setStatusAC } from "../redux/actions";
import { changeInputStatus, RUNTIME } from "../redux/app_reducer";
import { addDropedElement, addDroppedElement } from "../redux/drop_reducer";
import { DEACTIVE_BLOCK } from "../redux/statuses";
import { ItemTypes } from "../types/ItemTypes";
import "./Calculator.css";

const getAppMode = (state) => state.app.appMode;
const getDropElements = (state) => state.dropElements
const getDragElements = state => state.dragElements


const TargetBoxContainer = () => {
  const appMode = useSelector(getAppMode);
  const dropElements = useSelector(getDropElements)
  const dragElements = useSelector(getDragElements)
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(true);

  const onDrop = (item) => {
    // const newEl = {
    //   id: item.id,
    //   order: item.order,
    //   status: "done", 
    //   component: item.component
    // }
    if (item.item.id === "input") {
      dispatch(changeInputStatus(true))
    }

    dispatch(setStatusAC(DEACTIVE_BLOCK, item.item.id));
    dispatch(addDroppedElement(item.item))

    // dispatch(addElementAC(item))
    setEmpty(false);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BLOCK,
    drop: (item, monitor) => {
      
      onDrop(item);
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const style = {
    border: empty ? "2px dashed #C4C4C4" : "none",
    backgroundColor: isOver ? "yellow" : undefined,
   
  };

  const calculatorItemClassName =
    appMode === RUNTIME
      ? "calculatorItem"
      : "calculatorItem deactive";

  return (
    <>
      {
        <div
          ref={drop}
          className="frame"
          style={style}
        >

          {dropElements.map( (el) => {
              return <div key={el.id} className="itemContainer">
               <div className={calculatorItemClassName}>
                 {el.component}
               </div>
                 
                </div>;
            })}

        </div>
      }
    </>
  );
};

export default TargetBoxContainer;
