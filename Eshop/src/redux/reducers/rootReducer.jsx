import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducers from "./brandReducers";




export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducers,
})