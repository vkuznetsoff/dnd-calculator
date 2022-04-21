import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import drag_reducer from "./drag_reducer"
import drop_reducer from "./drop_reducer"




const rootReducer = combineReducers(
    {
        dragElements: drag_reducer, 
        dropElements: drop_reducer
    }
    )


const store =  configureStore({
    reducer: rootReducer
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware ({
    //   serializableCheck: false,
    // })
})

window.store = store

export default store