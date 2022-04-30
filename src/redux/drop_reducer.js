import { ADD_ELEMENT, ADD_ITEM } from "./actionTypes";

const initialState = [];

export default function drop_reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {     
      const inState = state.some(i => i.id == action.payload.id) 
      if (!inState) {
        
        if (action.payload.id === "input"){
          return [action.payload, ...state]
        }
        return [...state, action.payload]
      }
     
    }

    default:
      return state;
  }
}

export const addDroppedElement = (item) => {
    
  return {
    type: ADD_ITEM,
    payload: item,
  };
};
