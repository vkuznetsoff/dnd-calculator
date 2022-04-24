import { configureStore} from "@reduxjs/toolkit"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
import drag_reducer from "./drag_reducer"
import drop_reducer from "./drop_reducer"
import input_reducer from "./input_reducer"




const rootReducer = combineReducers(
    {
        dragElements: drag_reducer, 
        dropElements: drop_reducer,
        input: input_reducer
    }
    )
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
    
// const store =  configureStore({
//     reducer: rootReducer,
//     middleware: [applyMiddleware(thunkMiddleware)]
   
//     // middleware: getDefaultMiddleware =>
//     // getDefaultMiddleware ({
//     //   serializableCheck: false,
//     // })
// })

window.store = store

export default store