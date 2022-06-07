import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import drag_reducer from "./drag_reducer"
import drop_reducer from "./drop_reducer"
import input_reducer from "./input_reducer"
import app_reducer from "./app_reducer";




const rootReducer = combineReducers(
    {
        dragElements: drag_reducer, 
        dropElements: drop_reducer,
        input: input_reducer,
        app: app_reducer

    }
    )
const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(thunkMiddleware)))
    

window.store = store

export default store