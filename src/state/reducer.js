import { CHANGE_STATUS } from "./actionTypes"


export const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case CHANGE_STATUS: {
            debugger
            return {
                ...state,
                status: action.payload
            }
        }

        default:
            debugger
            return {...state}
        
    }
}