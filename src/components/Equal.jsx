import { SetActiveBorder } from "../utils/utils"
import "./Constructor.css"

const Equal = () => {

    const onEqualClick = (e) => {
           
            alert(e.target)
        
      
    }


    return (
        <div className="equalContainer">
            <div className="itemEqual" 
             onClick={(e) => onEqualClick(e)}>
                <p>=</p>
            </div>
        </div>




    )
}

export default Equal