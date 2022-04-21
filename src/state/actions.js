import { ADD_ELEMENT, CHANGE_STATUS } from "./actionTypes"

export const setStatusAC = (status, id) => {   
    return {
    type: CHANGE_STATUS,
    payload: {
        status,
        id
    }
}
}

export const addElementAC = (id) => {   
    return {
    type: ADD_ELEMENT,
    payload: {
        id
    }
}
}