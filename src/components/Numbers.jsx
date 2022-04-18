// import "./Operations.css"

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","]
const Numbers = () => {
    return (
        <div className="numbersContainer">
            {list.map(i => {
                return (
                    <div className="numberItem">
                        <p>{i}</p>
                    </div>
                )
            })
            }
            {/* <div className="numberItem">0</div>
            <div className="numberItem">,</div> */}
        </ div>





    )
}

export default Numbers