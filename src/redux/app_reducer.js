import Constructor from "../components/Constructor";
import { ADD_ELEMENT, ADD_ITEM, CHANGE_MODE } from "./actionTypes";

export const CONSTRUCTOR = 'CONSTRUCTOR'
export const RUNTIME = 'RUNTIME'

const initialState = {
  appMode: CONSTRUCTOR
};

export default function app_reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MODE: {     
        return {...state, appMode: action.payload}
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
