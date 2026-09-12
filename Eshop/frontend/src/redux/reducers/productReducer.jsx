import  {GET_ERROR,CREATE_PRODUCT,GET_ALL_PRODUCT ,GET_PRODUCT_DETALIS}  from "../Type"

const initial = {
    product : [],
    allProduct : [],
    oneProduct : [],
    loading : true,
}

const productReducer = (state = initial , action) => {

    switch (action.type){
        case CREATE_PRODUCT: 
        return {
            ...state,
            product:action.payload,
            loading:false,
        }
        case GET_ALL_PRODUCT: 
        return {
            ...state,
            allProduct:action.payload,
            loading:false,
        }
        case GET_PRODUCT_DETALIS: 
        return {
            ...state,
            oneProduct:action.payload,
            loading:false,
        }
        case GET_ERROR: 
        return {
            loading:true,
            product:action.payload,
        }

        default:
            return state
    } 

}

export default productReducer