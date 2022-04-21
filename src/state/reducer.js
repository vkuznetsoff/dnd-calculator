import { ADD_ELEMENT, CHANGE_STATUS } from "./actionTypes"


export const reducer = (state, action) => {
    
    switch (action.type) {
        case CHANGE_STATUS: {
            
            return  state.map(c => {
                    if (action.payload.id == c.id) {
                        return {...c, status: action.payload.status }
                    }

                    return {...c}
                })
        }

        case ADD_ELEMENT: {
            

        }

        default:
            
            return {...state}
        
    }

}