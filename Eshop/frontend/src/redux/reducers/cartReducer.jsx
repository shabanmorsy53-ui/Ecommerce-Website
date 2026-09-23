import  {GET_ERROR , ADD_TO_CART_USER, GET_CART_USER}  from "../Type"

const initial = {
    addtocart : [],
    cartitem : [],
    loading : true,
}

const cartReducer = (state = initial , action) => {

    switch (action.type){
        case ADD_TO_CART_USER: 
        return {
            ...state,
            addtocart:action.payload,
            loading:false,
        }
        case GET_CART_USER: 
        return {
            ...state,
            cartitem:action.payload,
            loading:false,
        }
        case GET_ERROR: 
        return {
            loading:true,
            brand:action.payload,
        }

        default:
            return state
    } 

}



export default cartReducer;