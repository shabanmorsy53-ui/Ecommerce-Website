import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducers from "./brandReducers";
import subCategoryReducer from "./subCategoryReducer";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";



export default combineReducers({
    allCategory: categoryReducer,
    allBrand: brandReducers,
    subCategory : subCategoryReducer,
    authReducer:authReducer,
    allProduct:productReducer,
    allReview:reviewReducer,
})