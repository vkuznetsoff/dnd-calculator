import { useDrag } from "react-dnd"
import { ItemTypes } from "../types/ItemTypes"

const Block = ({component, block}) => {

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.BLOCK,
        item: {
            id: block.id
        },
        
        collect: monitor => (
            {
                isDragging: !!monitor.isDragging()
            }
        )      
    })
   

    return (
        <>
        <div ref={drag} style={{  opacity: isDragging ? 0.5 : 1 }}>
        {block.component}     
        </div>
        
        </>
         
    )
}

export default Block