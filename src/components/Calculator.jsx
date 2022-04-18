import "./Calculator.css"

const isEmpty = true



const Calculator = () => {
    // const [btnList, setBtnList] = useState([])

    return (
        <div className="calculatorContainer" >

            {isEmpty ? <div className="frame">Hello</div>
                : <div> not empty </div>}
        </div>
    )
}

export default Calculator