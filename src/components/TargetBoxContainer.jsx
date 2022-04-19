import { useContext } from "react"
import { useDrop } from "react-dnd"
import { Context } from "../App"
import { setStatusAC } from "../state/actions"
import { ItemTypes } from "../types/ItemTypes"
import "./Calculator.css"

const TargetBoxContainer = ({dispatch}) => {
    // const {isOver} = props
    const state = useContext(Context)
    
    const onDrop = () => {
        dispatch(setStatusAC("done"))
    }

    const [{ isOver }, drop] = useDrop(
        () => ({
            accept: ItemTypes.BLOCK,
            drop: (monitor) => onDrop(),
        
        collect: monitor => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop()
            })
        }))

    return (
        <div className="frame" style={{ backgroundColor: isOver ? 'yellow' : undefined }}
            ref={drop}>

                {state.map( el => {
                    return (
                        <div>{el.id} {el.status} </div>
                    )
                })}


        </div>
    )
}

export default TargetBoxContainer