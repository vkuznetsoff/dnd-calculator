import Constructor from "../components/Constructor";
import { ADD_ELEMENT, ADD_ITEM, CHANGE_MODE, INPUT_MOVED } from "./actionTypes";

export const CONSTRUCTOR = 'CONSTRUCTOR'
export const RUNTIME = 'RUNTIME'

const initialState = {
  appMode: CONSTRUCTOR,
  isInputDrop: false
};

export default function app_reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE: {     
        return {...state, appMode: action.payload}
    }

    case INPUT_MOVED: {     
      return {...state, isInputDrop: true}
  }

    default:
      return state;
  }
}

export const changeAppMode = (mode) => {
    
  return {
    type: CHANGE_MODE,
    payload: mode,
  };
};

export const changeInputStatus = (flag) => {

  return {
    type: INPUT_MOVED,
    payload: flag,
  };
};
