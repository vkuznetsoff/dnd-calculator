import Equal from "../components/Equal";
import Input from "../components/Input";
import Numbers from "../components/Numbers";
import Operations from "../components/Operations";
import { CHANGE_STATUS } from "./actionTypes";
import { ACTIVE_BLOCK, DEACTIVE_BLOCK } from "./statuses";




const initialState = [
  {
    id: "input",
    order: 1,
    component: <Input />,
    status: ACTIVE_BLOCK,
  },

  {
    id: "operations",
    order: 2,
    component: <Operations />,
    status: ACTIVE_BLOCK,
  },

  {
    id: "numbers",
    order: 3,
    component: <Numbers />,
    status: ACTIVE_BLOCK,
  },
  {
    id: "equal",
    order: 4,
    component: <Equal />,
    status: ACTIVE_BLOCK, //  or "DEACTIVE_BLOCK"
  },
];

export default function drag_reducer(state = initialState, action) {
  switch (action.type) {
    
    case CHANGE_STATUS: {
      return state.map((c) => {
        if (c.id == action.payload.id) {
          return { ...c, status: action.payload.status };
        }

        return { ...c };
      });
    }

    default:
      return state;
  }
}
