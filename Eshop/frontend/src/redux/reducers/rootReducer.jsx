import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducers from "./brandReducers";
import subCategoryReducer from "./subCategoryReducer";
import authReducer from "./authReducer";




export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducers,
    subCategory : subCategoryReducer,
    authReducer:authReducer,
})