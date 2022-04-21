import { useContext, useState } from "react"
import { Context } from "../App"
import "./Calculator.css"
import TargetBoxContainer from "./TargetBoxContainer"





const Calculator = () => {    
    return (
        <div className="calculatorContainer" >

             <TargetBoxContainer />
               
        </div>
    )
}

export default Calculator