import { useDrag } from "react-dnd"
import { ItemTypes } from "../types/ItemTypes"

const Block = ({component}) => {

    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.BLOCK,
        
        collect: monitor => (
            {
                isDragging: !!monitor.isDragging()
            }
        )      
    })
   

    return (
        <>
        <div ref={drag} style={{  opacity: isDragging ? 0.5 : 1 }}>
        {component}     
        </div>
        
        </>
         
    )
}

export default Block