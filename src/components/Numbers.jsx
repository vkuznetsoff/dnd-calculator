// import "./Operations.css"

import { SetActiveBorder } from "../utils/utils";

const list = ["1", 2, 3, 4, 5, 6, 7, 8, 9, 0, ","];
const Numbers = () => {

  const onNumberClick = (e, i) => {
        SetActiveBorder(e, "numberItem")
      //HERE: Function to Save clicked Number
      setTimeout(() => (e.target.style = "border: 1px solid #E2E3E5"), 500);
    
  };

  return (
    <div className="numbersContainer">
      {list.map((i) => {
        console.log(i);
        debugger;
        return (
          <div
            key={list.indexOf(i)}
            className="numberItem"
            onClick={(e) => onNumberClick(e, i)}
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
