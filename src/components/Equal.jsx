import { useDispatch, useSelector } from "react-redux";
import { calcAC } from "../redux/actions";
import { EqualPress } from "../redux/input_reducer";
import { SetActiveBorder } from "../utils/utils";
import "./Constructor.css";

const Equal = () => {
  const dispatch = useDispatch();

  const expr = useSelector((state) => state.input.expr);

  const onEqualClick = (e) => {
    dispatch(EqualPress(true))
    // dispatch(calcAC());

    setTimeout(() => {
      console.log('expr= ', expr);
    }, 500);
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
