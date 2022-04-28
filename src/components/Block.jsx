import { useDrag } from "react-dnd"
import { DEACTIVE_BLOCK } from "../redux/statuses"
import { ItemTypes } from "../types/ItemTypes"

const Block = ({block}) => {

    const [{isDragging, isDropped}, drag] = useDrag({
        type: ItemTypes.BLOCK,
        item: {
            item: block
        },
        
        collect: monitor => (
            {
                isDragging: !!monitor.isDragging(),
            }
        ),
        
        end: (item, monitor) => {
            //Получаем сведения о результатах перетаскивания
        
            // const res1 = monitor.getDropResult()
            // const res2 = monitor.didDrop()
            // console.log(res1)
            // console.log(res2)
            // console.log(item)
        }
    })

    const style = {
        opacity: (isDragging || block.status == DEACTIVE_BLOCK) ? "0.5" : "1",
        pointerEvents: block.status == DEACTIVE_BLOCK && "none"
    }
   
   

    return (
        <>
        <div ref={drag} style={style} >
        {block.component}     
        </div>
        </>
         
    )
}

export default Block