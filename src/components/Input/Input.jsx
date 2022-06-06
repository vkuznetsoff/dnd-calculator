import { useSelector } from "react-redux"
import { ACTIVE_BLOCK } from "../../redux/statuses"
import "./Input.css"

const Input = () => {
    const inputField = useSelector(state => state.input.inputField)
    
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