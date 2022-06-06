import Equal from "../components/Equal/Equal";
import InitInput from "../components/Input/InitInput";
import Numbers from "../components/Numbers/Numbers";
import Operations from "../components/Operations/Operations";
import { CHANGE_STATUS } from "./actionTypes";
import { ACTIVE_BLOCK } from "./statuses";


const initialState = [
  {
    id: "init_input",
    order: 1,
    component: <InitInput />,
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
