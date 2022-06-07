import { useSelector } from "react-redux"
import "./Input.css"

const Input = () => {
    const inputField = useSelector(state => state.input.inputField)
    
    return (
        <div className="inputFieldContainer">
            <div className="inputField">
                <p>{(inputField) ? inputField : 0}</p>
            </div>
        </ div>
    )
}

export default Input