import { ADD_ELEMENT, ADD_ITEM } from "./actionTypes";

const initialState = [];

export default function drop_reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
        debugger
      return [...state, action.payload];
    }

    default:
      return state;
  }
}

export const addDroppedElement = (item) => {
    debugger
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
