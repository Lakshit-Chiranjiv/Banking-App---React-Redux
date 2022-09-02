import { createStore,applyMiddleware } from "redux";
import allReducers from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(
    allReducers,    //combined reducers
    {},
    applyMiddleware(thunk)  //default state
)