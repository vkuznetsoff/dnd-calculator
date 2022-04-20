import { CHANGE_STATUS } from "./actionTypes"

export const setStatusAC = (status, id) => {
    
    return {
    type: CHANGE_STATUS,
    payload: {
        status,
        id
    }
}
}