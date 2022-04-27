import { useDispatch, useSelector } from "react-redux";
import { calcAC, calcResult, changeInputFieldAC, isInput2AC, isOperatorPress, resetInputFieldAC, setOperatorAC } from "../redux/actions";
import { EqualPress, setInput1, setInput2 } from "../redux/input_reducer";
import { SetActiveBorder } from "../utils/utils";
import "./Constructor.css";

const Equal = () => {
  const dispatch = useDispatch();

  const input1 = useSelector(state => state.input.input1)
  const input2 = useSelector(state => state.input.input2)
  const isEqualPress = useSelector(state => state.input.isEqualPress)
  const operator = useSelector(state => state.input.operator)


  const onEqualClick = (e) => {
    
    dispatch(calcResult())

  };

  return (
    <div className="equalContainer">
      <div className="itemEqual" onClick={(e) => onEqualClick(e)}>
        <p>=</p>
      </div>
    </div>
  );
};

export default Equal;
