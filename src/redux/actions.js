import { ADD_ELEMENT, CALC_EXPR, CHANGE_INPUT, CHANGE_INPUT_1, CHANGE_INPUT_2, CHANGE_INPUT_FIELD, CHANGE_STATUS, IS_EQUAL_PRESS, IS_INPUT_1, IS_INPUT_2, IS_OPERATOR_PRESS, RESET_INPUT_1, RESET_INPUT_2, RESET_INPUT_FIELD, SET_OPERATOR } from "./actionTypes"

export const setStatusAC = (status, id) => {   
    return {
    type: CHANGE_STATUS,
    payload: {
        status,
        id
    }
}
}

export const addElementAC = (item) => {   
    return {
    type: ADD_ELEMENT,
    payload: item
}
}

export const changeInput1AC = (string) => { 
      
    return {
    type: CHANGE_INPUT_1,
    payload: string
}
}

export const changeInput2AC = (string) => { 
      
    return {
    type: CHANGE_INPUT_2,
    payload: string
}
}

export const changeInputFieldAC = (string) => { 
      
    return {
    type: CHANGE_INPUT_FIELD,
    payload: string
}
}

export const resetInputFieldAC = (defValue=null) => { 
      
    return {
    type: RESET_INPUT_FIELD,
    payload: defValue
   
}
}

export const setOperatorAC = (operator) => { 
      
    return {
    type: SET_OPERATOR,
    payload: operator
}
}

export const calcAC = (expr) => { 
    
    return {
    type: CALC_EXPR
}
}

export const isInput1AC = (flag) => { 
    
    return {
    type: IS_INPUT_1,
    payload: flag
}
}

export const isInput2AC = (flag) => { 
    
    return {
    type: IS_INPUT_2,
    payload: flag
}
}

export const resetInput1AC = () => { 
    
    return {
    type: RESET_INPUT_1,
}
}

export const resetInput2AC = () => { 
    
    return {
    type: RESET_INPUT_2,
}
}

export const isEqualPress = (flag) => { 
    
    return {
    type: IS_EQUAL_PRESS,
    payload: flag
}
}

export const isOperatorPress = (flag) => { 
    
    return {
    type: IS_OPERATOR_PRESS,
    payload: flag
}
}

