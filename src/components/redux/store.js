import { combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import cartReducer from "./reducers/cartReducers"

const combinedReducer = combineReducers({
    cartReducer: cartReducer
})
export const store = createStore(combinedReducer, composeWithDevTools())
