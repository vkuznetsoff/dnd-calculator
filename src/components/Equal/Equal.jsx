import { useDispatch } from "react-redux";
import { calcResult } from "../../redux/actions";

import "./Equal.css";

const Equal = () => {
  const dispatch = useDispatch();

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
