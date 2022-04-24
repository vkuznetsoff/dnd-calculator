import { useDispatch, useSelector } from "react-redux";
import { changeInputAC, resetInputFieldAC, setOperatorAC } from "../redux/actions";
import { OpeartorPress } from "../redux/input_reducer";
import { SetActiveBorder } from "../utils/utils";
import "./Constructor.css";

const list = ["/", "*", "-", "+"];
const Operations = () => {
  const dispatch = useDispatch();
  const operator = useSelector(state => state.input.operator)

  const onOperationClick = (e, i) => {
    SetActiveBorder(e, "item");

    //HERE: Function to Save clicked Number
    dispatch(OpeartorPress(true, i));
    dispatch(resetInputFieldAC())
    

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
