import { SetActiveBorder } from "../utils/utils"
import "./Constructor.css"

const list = ["/", "*", "-", "+"]
const Operations = () => {

    const onOperationClick = (e) => {
        SetActiveBorder(e, "item")
    }

    return (
        <div className="operationContainer" >
            {list.map(i => {
                return  <div key={list.indexOf(i)} className="item" onClick={(e) => onOperationClick(e)}>
                <p>{i}</p>
            </div>
            })
            }
           
        </div>

    )
}

export default Operations