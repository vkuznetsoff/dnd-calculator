// import "./Operations.css"

import { useState } from "react";
import { SetActiveBorder } from "../utils/utils";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","];
const Numbers = () => {

  const [flag, setFlag] = useState(true)

  const onNumberClick = (e) => {
    
      SetActiveBorder(e, "numberItem")
    
      // console.log('Deactive')


    //HERE: Function to Save clicked Number
    // setTimeout(() => {
    //   (e.target.style = "border: 1px solid #E2E3E5")
    
    // }, 500);

  };

  return (
    <div className="numbersContainer">
      {list.map((i) => {

        return (
          <div
            key={list.indexOf(i)}
            className="numberItem"
            onClick={(e) => onNumberClick(e)}
          >
            {i}
          </div>
        );
      })}
      {/* <div className="numberItem">0</div>
            <div className="numberItem">,</div> */}
    </div>
  );
};

export default Numbers;
