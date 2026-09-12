
import  {CREATE_SUB_CATE, GET_ERROR,GET_SUB_DEPENDED}  from "../Type"

const initial = {
    subCategory : [],
    loading : true,
}

const subCategoryReducer = (state = initial , action) => {

    switch (action.type){
        case CREATE_SUB_CATE: 
        return {
            ...state,
            subCategory:action.payload,
            loading:false,
        }
        case GET_SUB_DEPENDED: 
        return {
            subCategory:action.payload,
            loading:false,
        }

        case GET_ERROR: 
        return {
            loading:true,
            subCategory:action.payload,
        }

        default:
            return state
    } 

}

export default subCategoryReducer