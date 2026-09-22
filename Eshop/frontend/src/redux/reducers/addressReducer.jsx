import  {GET_ERROR, CREATE_ADDRESS, GET_ADDRESS, DELETE_ADDRESS}  from "../Type"

const initial = {
    addresse : [],
    alladdress : [],
    deleteaddress : [],
    loading : true,
}

const addressReducer = (state = initial , action) => {

    switch (action.type){
        case CREATE_ADDRESS: 
        return {
            ...state,
            addresse:action.payload,
            loading:false,
        }
        case GET_ADDRESS: 
        return {
            ...state,
            alladdress:action.payload,
            loading:false,
        }
        case DELETE_ADDRESS: 
        return {
            ...state,
            deleteaddress:action.payload,
            loading:false,
        }
        case GET_ERROR: 
        return {
            loading:true,
            addresse:action.payload,
        }

        default:
            return state
    } 

}

export default addressReducer