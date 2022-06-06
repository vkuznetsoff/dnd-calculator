import {
  CALC_EXPR,
  CALC_RESULT,
  CHANGE_INPUT_1,
  CHANGE_INPUT_2,
  CHANGE_INPUT_FIELD,
  CLEAR_ALL,
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

function calc(a, b, operator) {
  switch (operator) {
    case "+": {
      return +a + +b;
    }

    case "-": {
      return a - b;
    }

    case "*": {
      return a * b;
    }

    case "/": {
      if (b === "0") {
        return "Error";
      }
      return a / b;
    }
  }
}

const initialState = {
  inputField: "",
  input1: "",
  input2: "",
  operator: "",
  isEqualPress: false,
  calculate: calc,
};

export default function input_reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT_1: {
      return {
        ...state,
        input1: action.payload,
      };
    }

    case CHANGE_INPUT_2: {
      return {
        ...state,
        input2: action.payload,
      };
    }

    case CHANGE_INPUT_FIELD: {
      return {
        ...state,
        inputField: action.payload,
      };
    }

    case SET_OPERATOR: {
      return { ...state, operator: action.payload };
    }

    // case IS_EQUAL_PRESS: {
    //   return { ...state, isEqual: action.payload };
    // }

    case IS_EQUAL_PRESS: {
      return { ...state, isEqual: action.payload };
    }

    case CALC_RESULT: {
      let result = calc(state.input1, state.input2, state.operator);
      if (result === "Error") { 
        return {
          ...state,
          input1: "",
          inputField: result,
          isEqualPress: true,
        } 
      }
        return {
          ...state,
          input1: result,
          inputField: result,
          isEqualPress: true,
        } 
      
    }

    case CLEAR_ALL: {
      return {
        ...state,
        inputField: "0",
        input1: "",
        input2: "",
        operator: "",
        isEqual: false,
      };
    }

    default:
      return state;
  }
}

// export const setInput1 = (i) => (dispatch) => {
//   dispatch()

// };
// export const setInput1 = (i) => {
//   return {
//     type: CHANGE_INPUT_1,
//     payload: i
//   }
// }

// export const setInput2 = (i) => {
//   return {
//     type: CHANGE_INPUT_1,
//     payload: i
//   }
// }
// // export const setInput2 = (flag, i) => (dispatch) => {

// // };

// // export const OperatorPress = (flag, i) => (dispatch) => {

// // };

// export const setOperator = (i) => {
//   return {
//     type: SET_OPERATOR,
//     payload: i
//   }
// }

// // export const EqualPress = (flag, result) => (dispatch) => {

// // };

// export const isEqualPress = (flag) => {
//   return {
//     type: IS_EQUAL_PRESS,
//     payload: flag
//   }
// }
