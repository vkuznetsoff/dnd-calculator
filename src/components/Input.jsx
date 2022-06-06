import { useSelector } from "react-redux"
import { ACTIVE_BLOCK } from "../redux/statuses"
import "./Constructor.css"

const getInputStatus = (state) => state.app.isInputDrop;

const Input = () => {
    const inputField = useSelector(state => state.input.inputField)
    const blockStatus = useSelector(state => state.dragElements.status)
        
    return (
      
        <div className="inputFieldContainer">
            <div className="inputField">
                <p>{(inputField || blockStatus == ACTIVE_BLOCK ) ? inputField : 0}</p>
                {/* <p>{value}</p> */}
            </div>
        </ div>

    )
}

export default Input