import { useContext, useState } from "react";
import { useDrop } from "react-dnd";
import { Context } from "../App";
import { setStatusAC } from "../state/actions";
import { ItemTypes } from "../types/ItemTypes";
import "./Calculator.css";

const TargetBoxContainer = () => {
  const [state, dispatch] = useContext(Context);

  const [empty, setEmpty] = useState(true);

  const onDrop = (item) => {
    dispatch(setStatusAC("done", item.id));
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
          {state
            .filter((f) => f.status == "done")
            .map((el) => {
              return <div key={el.id} className="itemContainer">{el.component}</div>;
            })}
        </div>
      }
    </>
  );
};

export default TargetBoxContainer;
