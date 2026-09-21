import  {GET_ERROR,CREATE_COUPON,GET_ALL_COUPON,DELETE_COUPON,GET_ONE_COUPON, EDIT_COUPON}  from "../Type"

const initial = {
    coupon : [],
    allcoupon : [],
    deletecoupon : [] ,
    onecoupon : [] ,
    editcoupon : [] ,
    loading : true,
}

const couponReducer = (state = initial , action) => {

    switch (action.type){
        case CREATE_COUPON: 
        return {
            ...state,
            coupon:action.payload,
            loading:false,
        }
        case GET_ALL_COUPON: 
        return {
            ...state,
            allcoupon:action.payload,
            loading:false,
        }
        case GET_ONE_COUPON: 
        return {
            ...state,
            onecoupon:action.payload,
            loading:false,
        }
        case EDIT_COUPON: 
        return {
            ...state,
            editcoupon:action.payload,
            loading:false,
        }
        case DELETE_COUPON: 
        return {
            ...state,
            deletecoupon:action.payload,
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

export default couponReducer