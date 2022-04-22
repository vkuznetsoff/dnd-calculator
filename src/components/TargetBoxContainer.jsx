import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../App";
import { addElementAC } from "../redux/actions";
import { setStatusAC } from "../redux/actions";
import { DEACTIVE_BLOCK } from "../redux/statuses";
import { ItemTypes } from "../types/ItemTypes";
import "./Calculator.css";

const TargetBoxContainer = () => {
  const dropElements = useSelector(state => state.dropElements)
  const dragElements = useSelector(state => state.dragElements)
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(true);

  const onDrop = (item) => {
    // const newEl = {
    //   id: item.id,
    //   order: item.order,
    //   status: "done", 
    //   component: item.component
    // }
    
    dispatch(setStatusAC(DEACTIVE_BLOCK, item.id));
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

  return (
    <>
      {
        <div
          ref={drop}
          className="frame"
          style={style}
        >
          {dragElements
            .filter((f) => f.status == DEACTIVE_BLOCK)
            .map((el) => {
              return <div key={el.id} className="itemContainer">{el.component}</div>;
            })}
        </div>
      }
    </>
  );
};

export default TargetBoxContainer;
