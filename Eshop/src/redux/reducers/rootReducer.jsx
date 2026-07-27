import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducers from "./brandReducers";
import subCategoryReducer from "./subCategoryReducer";




export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducers,
    subCategory : subCategoryReducer,
})