import { useContext, useState } from "react"
import { useDrop } from "react-dnd"
import { Context } from "../App"
import { setStatusAC } from "../state/actions"
import { ItemTypes } from "../types/ItemTypes"
import "./Calculator.css"

const TargetBoxContainer = () => {

    const [state, dispatch] = useContext(Context)

    const [empty, setEmpty] = useState(true)

    const onDrop = (item) => {

        dispatch(setStatusAC("done", item.id))
        setEmpty(false)
        
    }

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BLOCK,
            drop: (item, monitor) => {

                onDrop(item)
            },

            collect: monitor => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }))
    

    return (
        <>
            {empty ? <div ref={drop} className="frame"
                style={{ backgroundColor: isOver ? 'yellow' : undefined }}></div>
                : state.filter(f => f.status == "done").map(el => {

                    return (
                        <div className="itemContainer">
                            {el.component}
                        </div>
                    )
                })
                }
        </>

       
    )
}

export default TargetBoxContainer