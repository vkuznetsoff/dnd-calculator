// import "./Operations.css"

import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { calcAC, changeInput1AC, isInput1AC, isInput2AC} from "../redux/actions";
import { setInput1, setInput1Flag, setInput2 } from "../redux/input_reducer";
import { SetActiveBorder } from "../utils/utils";

const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ","];
const Numbers = () => {

 
  const dispatch = useDispatch()

  
  const isInput1 = useSelector(state => state.input.isInput1)
  const isInput2 = useSelector(state => state.input.isInput2)
  const isEqualPress = useSelector(state => state.input.isEqualPress)
  const isOperatorPress = useSelector(state => state.input.isOperatorPress)


  

  const onNumberClick = (e, i) => {
    SetActiveBorder(e, "numberItem")
    // dispatch(isInput1AC(true))

   
    if (!isOperatorPress || isInput2)  {
      dispatch(setInput1(true, i))
      
    } else   dispatch(setInput2(true,i))
    

      //isInput1 && dispatch(changeInput1AC(i))

      
    
     //HERE: Function to Save clicked Number
     
    //  (isInput1 && isEqualPress) && dispatch(setInput1Flag(true, i))

    //  e.target.style = "border: 1px solid #E2E3E5"

    // alert(isInput1)
    

    // setTimeout(() => {
    //   (isInput1 && !isEqualPress) && dispatch(changeInput1AC(i))
    // }, 1000);

    // if (isInput1 && !isEqualPress) {

    //   dispatch(changeInput1AC(i))
    // }
    // dispatch(calcAC(i))
    
    setTimeout(() => {
      (e.target.style = "border: 1px solid #E2E3E5")
    }, 300);

    

  };

  return (
    <div className="numbersContainer">
      {list.map((i) => {

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

// const mapStateToProps = (state) => {

// }
export default Numbers;

// export default connect(mapStateToProps, mapDispatchToProps)(Numbers);
