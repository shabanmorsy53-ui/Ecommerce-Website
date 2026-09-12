import  {GET_ERROR,CREATE_PRODUCT }  from "../Type"

const initial = {
    product : [],
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