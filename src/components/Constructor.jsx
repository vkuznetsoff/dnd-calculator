import "./Constructor.css"
import Equal from "./Equal"
import Input from "./Input"
import Numbers from "./Numbers"
import Operations from "./Operations"

const Constructor = () => {
    return (
        <div className="constructorContainer" >

            <div className="itemContainer">
                <Input />
            </div>



            <div className="itemContainer">
                <Operations />
            </div>

            <div className="itemContainer">
                <Numbers />
            </div>

            <div className="itemContainer">
                <Equal />
            </div>


        </div>
    )
}

export default Constructor