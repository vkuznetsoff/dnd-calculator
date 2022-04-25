import {
  changeInput1AC,
  changeInput2AC,
  changeInputFieldAC,
  isEqualPress,
  isInput1AC,
  isInput2AC,
  isOperatorPress,
  resetInput1AC,
  resetInputFieldAC,
  setOperatorAC,
} from "./actions";
import {
  CALC_EXPR,
  CHANGE_INPUT_1,
  CHANGE_INPUT_2,
  CHANGE_INPUT_FIELD,
  IS_EQUAL_PRESS,
  IS_INPUT_1,
  IS_INPUT_2,
  IS_OPERATOR_PRESS,
  RESET_INPUT_1,
  RESET_INPUT_2,
  RESET_INPUT_FIELD,
  SET_OPERATOR,
} from "./actionTypes";
import { ACTIVE_BLOCK, DEACTIVE_BLOCK } from "./statuses";

const initialState = {
  inputField: "0",
  input1: "0",
  input2: null,
  operator: "",
  expr: "",
  isInput1: true,
  isInput2: false,
  isEqualPress: false,
  isOperatorPress: false,
  // Calc: (expr) => eval(expr)
};

export default function input_reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT_1: {
      return {
        ...state,
        input1: state.input1 ? state.input1 + action.payload : action.payload,
      };
    }

    case CHANGE_INPUT_2: {
      return {
        ...state,
        input2: state.input2 ? state.input2 + action.payload : action.payload,
      };
    }

    case CHANGE_INPUT_FIELD: {
      return {
        ...state,
        inputField: state.isInput1
          ? state.input1
          : state.isInput2
          ? state.input2
          : undefined,
        // inputField: state.inputField
        //   ? state.inputField + action.payload
        //   : action.payload,
      };
    }

    case RESET_INPUT_FIELD: {
      return {
        ...state,
        inputField: action.payload,
      };
    }

    case SET_OPERATOR: {
      return { ...state, operator: action.payload };
    }

    case CALC_EXPR: {
      return { ...state, expr: state.input + state.expr };
    }

    case IS_INPUT_1: {
      return { ...state, isInput1: action.payload };
    }

    case IS_INPUT_2: {
      return { ...state, isInput2: action.payload };
    }

    case IS_EQUAL_PRESS: {
      return { ...state, isEqualPress: action.payload };
    }

    case IS_OPERATOR_PRESS: {
      return { ...state, isOperatorPress: action.payload };
    }

    case RESET_INPUT_1: {
      return { ...state, input1: "" };
    }

    case RESET_INPUT_2: {
      return { ...state, input2: "" };
    }

    default:
      return state;
  }
}

export const setInput1 = (flag, i) => (dispatch) => {
  dispatch(isInput1AC(flag));
  dispatch(changeInput1AC(i));
  dispatch(changeInputFieldAC(i));
};

export const setInput2 = (flag, i) => (dispatch) => {
  dispatch(isInput2AC(flag));
  dispatch(changeInput2AC(i));
  dispatch(changeInputFieldAC(i));
};

export const OpeartorPress = (flag, i) => (dispatch) => {
  
  dispatch(isInput2AC(true))
  dispatch(isOperatorPress(flag));
  dispatch(setOperatorAC(i));
  //dispatch(resetInputFieldAC(""));

  // if (isInput1 && !isEqualPress) {

  //     dispatch(changeInput1AC(i))
  //   }
};

export const EqualPress = (flag, result) => (dispatch) => {
  dispatch(isEqualPress(flag));
  dispatch(resetInputFieldAC(result));

  // dispatch(setInput1(res))
  // dispatch(setInput2(null))
  // dispatch(isInput2AC(false))
  // dispatch(isOperatorPress(false))
  // dispatch(setOperatorAC(""))

  // if (isInput1 && !isEqualPress) {

  //     dispatch(changeInput1AC(i))
  //   }
};
