import { useContext, useState } from "react"
import { Context } from "../App"
import "./Calculator.css"
import TargetBoxContainer from "./TargetBoxContainer"





const Calculator = ({dispatch}) => {
    // const [btnList, setBtnList] = useState([])
    const [empty, setEmpty] = useState(true)
    const data = useContext(Context)
    console.log(data)

    return (
        <div className="calculatorContainer" >
            

            {empty ? <TargetBoxContainer className="frame" dispatch={dispatch}/>
                : <div> not empty </div>}
        </div>
    )
}

export default Calculator