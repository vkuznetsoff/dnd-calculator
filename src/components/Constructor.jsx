import { useDrag } from "react-dnd"
import { ItemTypes } from "../types/ItemTypes"
import Block from "./Block"
import "./Constructor.css"
import Equal from "./Equal"
import Input from "./Input"
import Numbers from "./Numbers"
import Operations from "./Operations"




const Constructor = (props) => {
    const {divList} = props
    const [{isDragging}, drag] = useDrag({
        type: ItemTypes.BLOCK,
        item: {
            id: divList.id,
            order: divList.order,
            component: divList.component
        } ,
        collect: monitor => (
            {
                isDragging: !!monitor.isDragging()
            }
        )      
    })

    return (
        <div className="constructorContainer" >
            
            {divList.map(block => {
                return (
                    <div className="itemContainer">
                     <Block component={block.component} />
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