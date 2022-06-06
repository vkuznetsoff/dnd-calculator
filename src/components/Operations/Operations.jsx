import { useDispatch, useSelector } from "react-redux";
import { getAppMode } from "../../App";
import { setOperator } from "../../redux/actions";
import { CONSTRUCTOR } from "../../redux/app_reducer";
import { SetActiveBorder } from "../../utils/utils";

import "./Operations.css";

const list = ["/", "*", "-", "+"];
const Operations = () => {
  const appMode = useSelector(getAppMode);

  const dispatch = useDispatch();

  const input1 = useSelector((state) => state.input.input1);
  const input2 = useSelector((state) => state.input.input2);
  const isEqualPress = useSelector((state) => state.input.isEqualPress);
  const operator = useSelector((state) => state.input.operator);

  const onOperationClick = (e, i) => {
    SetActiveBorder(e, "item");

    //HERE: Function to Save clicked Number
    dispatch(setOperator(i));

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
            onClick={(e) =>
              appMode !== CONSTRUCTOR ? onOperationClick(e, i) : undefined
            }
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};

export default Operations;
