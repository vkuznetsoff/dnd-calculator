import { useDispatch, useSelector } from "react-redux";
import { changeInputAC, isInput1AC, resetInputFieldAC, setOperatorAC } from "../redux/actions";
import { OpeartorPress, setInput1, setInput2 } from "../redux/input_reducer";
import { SetActiveBorder } from "../utils/utils";
import "./Constructor.css";

const list = ["/", "*", "-", "+"];
const Operations = () => {
  const dispatch = useDispatch();
  const operator = useSelector(state => state.input.operator)
  const input2 = useSelector(state => state.input.input2)
  const isInput1 = useSelector(state => state.input.isInput1)
  const isInput2 = useSelector(state => state.input.isInput2)

  const onOperationClick = (e, i) => {
    SetActiveBorder(e, "item");
   
    //HERE: Function to Save clicked Number
    dispatch(OpeartorPress(true, i));
   if (isInput2 && isInput1) {
      dispatch(setInput1(true, input2))
      dispatch(setInput2(true, "0"))
    }

    

    setTimeout(() => {
      e.target.style = "border: 1px solid #E2E3E5";
    //   console.log('operator= ', operator)
    }, 300);
  };

  return (
    <div className="operationContainer">
      {list.map((i) => {
        return (
          <div
            key={list.indexOf(i)}
            className="item"
            onClick={(e) => onOperationClick(e, i)}
          >
            <p>{i}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Operations;
