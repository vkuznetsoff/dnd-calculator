import { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setStatusAC } from "../../redux/actions";
import { changeInputStatus, RUNTIME } from "../../redux/app_reducer";
import { addDroppedElement } from "../../redux/drop_reducer";
import { DEACTIVE_BLOCK } from "../../redux/statuses";
import { ItemTypes } from "../../types/ItemTypes";
import Block from "../Block/Block";

import dropSVG from "../../assets/images/drop.svg"
import "./Calculator.css";

const getAppMode = (state) => state.app.appMode;
const getDropElements = (state) => state.dropElements
const getDragElements = state => state.dragElements


const TargetBoxContainer = () => {
  const appMode = useSelector(getAppMode);
  const dropElements = useSelector(getDropElements)
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(true);

  const onDrop = (item) => {

    if (item.item.id === "init_input") {
      dispatch(changeInputStatus(true))
    }

    dispatch(setStatusAC(DEACTIVE_BLOCK, item.item.id));
    dispatch(addDroppedElement(item.item))
    setEmpty(false);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BLOCK,
    drop: (item) => {
      onDrop(item);
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const style = {
    border: empty ? "2px dashed #C4C4C4" : "none",
    backgroundColor: isOver ? "#F0F9FF" : undefined,

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

          {dropElements.map((el) => {
            return <div key={el.id} className="itemContainer">
              <div className={calculatorItemClassName}>
                <Block block={el} />
              </div>
            </div>;
          })}

          {dropElements.length === 0 ? <div className="dropText">
            <img src={dropSVG} alt='drop_here' />
            <div>Перетащите сюда любой элемент из левой панели</div>
          </div>
            : undefined
          }

        </div>
      }
    </>
  );
};

export default TargetBoxContainer;
