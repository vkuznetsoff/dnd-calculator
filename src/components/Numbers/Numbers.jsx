import { useDispatch, useSelector } from "react-redux";
import { getAppMode } from "../../App";
import { setInput1, setInput2, setInputField } from "../../redux/actions";
import { CONSTRUCTOR } from "../../redux/app_reducer";
import { SetActiveBorderStyle } from '../../utils/utils';
import { equalPress } from './../../redux/actions';

import "./Numbers.css"

const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const Numbers = () => {
  const appMode = useSelector(getAppMode);
  const dispatch = useDispatch();
  const input1 = useSelector((state) => state.input.input1);
  const input2 = useSelector((state) => state.input.input2);
  const isEqualPress = useSelector((state) => state.input.isEqualPress);
  const operator = useSelector((state) => state.input.operator);

  const onNumberClick = (e, i) => {
    e.target.style = SetActiveBorderStyle(e.target, "numberItem");
    setTimeout(() => {
      e.target.style = "border: 1px solid #E2E3E5";
    }, 300);


    if (input2 === "" && operator === "") {
      dispatch(setInput1(input1 + i));
      dispatch(setInputField(input1 + i));
    } else if (input1 != "" && input2 != "" && isEqualPress) {
      dispatch(setInput2(i));
      dispatch(equalPress(false));
      dispatch(setInputField(i));
    } else if (input1 != "" && isEqualPress){
      dispatch(setInput2(input2 + i));
      dispatch(setInputField(input2 + i));
    }
    else {
      dispatch(setInput2(input2 + i));
      dispatch(setInputField(input2 + i));
    }
  };

  return (
    <div className="numbersContainer">
      {list.map((i) => {
        return (
          <div
            key={list.indexOf(i)}
            className="numberItem"
            onClick={(e) =>
              appMode !== CONSTRUCTOR ? onNumberClick(e, i) : undefined
            }
          >
            {i}
          </div>
        );
      })}

    </div>
  );
};

export default Numbers;
