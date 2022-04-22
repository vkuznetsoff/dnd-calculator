import { useDrag } from "react-dnd"
import { DEACTIVE_BLOCK } from "../redux/statuses"
import { ItemTypes } from "../types/ItemTypes"

const Block = ({block}) => {

    const [{isDragging, isDropped}, drag] = useDrag({
        type: ItemTypes.BLOCK,
        item: {
            id: block.id
        },
        
        collect: monitor => (
            {
                isDragging: !!monitor.isDragging(),
            }
        )      
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