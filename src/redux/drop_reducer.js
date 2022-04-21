import { ADD_ELEMENT } from "./actionTypes"

const initialState = ["1", "2"]

export default function drop_reducer(state = initialState, action) {
    switch (action.type) {

        case ADD_ELEMENT: {
            debugger
            return [...state, action.payload]
        }

        default:
            return state
    }
}

