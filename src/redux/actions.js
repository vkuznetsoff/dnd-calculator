import {
  CALC_RESULT, CHANGE_INPUT_1, CHANGE_INPUT_2, CHANGE_INPUT_FIELD,
  CHANGE_STATUS, IS_EQUAL_PRESS, SET_OPERATOR
} from "./actionTypes"

export const setInput1 = (i) => {
  return {
    type: CHANGE_INPUT_1,
    payload: i
  }
}

export const setInput2 = (i) => {
  return {
    type: CHANGE_INPUT_2,
    payload: i
  }
}

export const setInputField = (i) => {
  return {
    type: CHANGE_INPUT_FIELD,
    payload: i
  }
}

export const setOperator = (i) => {
  return {
    type: SET_OPERATOR,
    payload: i
  }
}


export const isEqualPress = (flag) => {
  return {
    type: IS_EQUAL_PRESS,
    payload: flag
  }
}

export const calcResult = () => {
  return {
    type: CALC_RESULT
  }
}


export const setStatusAC = (status, id) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      status,
      id
    }
  }
}


