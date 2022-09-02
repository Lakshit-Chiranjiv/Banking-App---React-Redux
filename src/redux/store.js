import { createStore } from "redux";
import allReducers from "./reducers";

export const store = createStore(
    allReducers,    //combined reducers
    {}  //default state
)