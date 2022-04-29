import { useSelector } from "react-redux"
import { ACTIVE_BLOCK, DEACTIVE_BLOCK } from "../redux/statuses"
import "./Constructor.css"

const Input = () => {
    const inputField = useSelector(state => state.input.inputField)
    const blockStatus = useSelector(state => state.dragElements.status)
    // console.log('inputField', inputField)
    // console.log('blockStatus',blockStatus)
    
    return (
      
        <div className="inputFieldContainer">
            <div className="inputField">
                <p>{(inputField || blockStatus == ACTIVE_BLOCK) ? inputField : 0}</p>
            </div>
        </ div>

    )
}

export default Input