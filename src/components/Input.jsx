import { useSelector } from "react-redux"
import { ACTIVE_BLOCK, DEACTIVE_BLOCK } from "../redux/statuses"
import "./Constructor.css"

const getInputStatus = (state) => state.app.isInputDrop;

const Input = () => {
    const isInputDrop = useSelector(getInputStatus);
    const inputField = useSelector(state => state.input.inputField)

    // const dragElements = useSelector(state => state.dragElements)
    // const dropBlockStatus = useSelector(state => state.dropElements.status)
    
    //console.log('appMode', appMode)
    // console.log('blockStatus',blockStatus)
    
    return (
      
        <div className="inputFieldContainer">
            <div className="inputField">
                <p>{(inputField) ? inputField : 0}</p>
                {/* <p>{(inputField && dragBlockStatus == ACTIVE_BLOCK ) ? inputField : 0}</p> */}
            </div>
        </ div>

    )
}

export default Input