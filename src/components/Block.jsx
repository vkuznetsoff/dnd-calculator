import { useDrag, useDrop } from "react-dnd";
import { DEACTIVE_BLOCK } from "../redux/statuses";
import { ItemTypes } from "../types/ItemTypes";
import s from "../App.module.css";
import { useSelector } from "react-redux";
import { CONSTRUCTOR } from "../redux/app_reducer";

const getAppMode = (state) => state.app.appMode;

const Block = ({ block }) => {
  const appMode = useSelector(getAppMode);

  const [{ isDragging, isDropped }, drag] = useDrag({
    type: ItemTypes.BLOCK,
    item: {
      item: block,
    },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),

    end: (item, monitor) => {
      //Получаем сведения о результатах перетаскивания
    //   const res1 = monitor.getDropResult()
    //   const res2 = monitor.didDrop()
    //   console.log(res1)
    //   console.log(res2)
    //   console.log(item)
    },
  });

  const [ {isOver} ,drop] = useDrop( () => ({
      accept: ItemTypes.BLOCK,
     
      hover(item) { console.log()
      },

      collect: (monitor) => ({
        //Собирает информацию, о наведении перетаскиваемого элемента над объектом
        isOver: monitor.isOver()
      })

  }))

  const style = {
    opacity: isDragging || block.status === DEACTIVE_BLOCK ? "0.5" : "1",
    pointerEvents: block.status === DEACTIVE_BLOCK && "none",
    width: "100%",
    boxShadow: isOver ? '0 -10px 5px -5px #5D5FEF': "none"
    
  };

  const blockClass = appMode === CONSTRUCTOR ? s.deactive : undefined;

  return (
    <>
      <div ref={(node) => drag(drop(node))} style={style}>
        <div className={blockClass}>{block.component}</div>
      </div>
    </>
  );
};

export default Block;
