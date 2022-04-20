import { useContext } from "react"
import { useDrag } from "react-dnd"
import { Context } from "../App"
import { ItemTypes } from "../types/ItemTypes"
import Block from "./Block"
import "./Constructor.css"
import Equal from "./Equal"
import Input from "./Input"
import Numbers from "./Numbers"
import Operations from "./Operations"




const Constructor = () => {
    const [state, dispatch] = useContext(Context)
    
    // console.log(state)
    return (
        <div className="constructorContainer" >
            
            {state.map(block => {
                return (
                    <div  className="itemContainer">
                     <Block  block={block} />
                    </div>
                )
            })}

            {/* <div className="itemContainer">
                <Input />
            </div>

            <div className="itemContainer">
                <Operations />
            </div>

            <div className="itemContainer">
                <Numbers />
            </div>

            <div className="itemContainer">
                <Equal />
            </div> */}


        </div>
    )
}

export default Constructor