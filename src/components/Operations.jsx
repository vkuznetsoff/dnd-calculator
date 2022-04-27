import { useDispatch, useSelector } from "react-redux";
import { changeInputAC, isInput1AC, resetInputFieldAC, setOperator, setOperatorAC } from "../redux/actions";
import { OpeartorPress, setInput1, setInput2 } from "../redux/input_reducer";
import { SetActiveBorder } from "../utils/utils";
import "./Constructor.css";

const list = ["/", "*", "-", "+"];
const Operations = () => {
  const dispatch = useDispatch();

  const input1 = useSelector(state => state.input.input1)
  const input2 = useSelector(state => state.input.input2)
  const isEqualPress = useSelector(state => state.input.isEqualPress)
  const operator = useSelector(state => state.input.operator)

  const onOperationClick = (e, i) => {
    SetActiveBorder(e, "item");
   
    //HERE: Function to Save clicked Number
   dispatch(setOperator(i))

    setTimeout(() => {
      e.target.style = "border: 1px solid #E2E3E5";
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
