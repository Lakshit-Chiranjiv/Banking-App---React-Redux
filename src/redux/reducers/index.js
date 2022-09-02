import { combineReducers } from "redux";
import amountReducer from './amountReducer.js'
import loanReducer from './loanReducer.js'

const allReducers = combineReducers({
    amount: amountReducer,
    loan: loanReducer
})

export default allReducers;