import Input from "../components/Input/Input";
import { ADD_ITEM } from "./actionTypes";
import { ACTIVE_BLOCK } from "./statuses";

const InputBlock = {
  id: "input",
  order: 1,
  component: <Input />,
  status: ACTIVE_BLOCK,
}

const initialState = [];

export default function drop_reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const inState = state.some(i => i.id == action.payload.id)
      if (!inState) {

        if (action.payload.id === "init_input") {
          return [InputBlock, ...state]
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
