import  {GET_ALL_CATEGORY, GET_ERROR , CREATE_CATE,GET_ONE_CATEGORY}  from "../Type"

const initial = {
    category : [],
    oneCategory : [],
    loading : true,
}

const categoryReducer = (state = initial , action) => {

    switch (action.type){
        case GET_ALL_CATEGORY: 
        return {
            ...state,
            category:action.payload,
            loading:false,
        }
        case GET_ONE_CATEGORY: 
        return {
            ...state,
            oneCategory:action.payload,
            loading:false,
        }
        case CREATE_CATE: 
        return {
            category:action.payload,
            loading:false,
        }

        case GET_ERROR: 
        return {
            loading:true,
            category:action.payload,
        }

        default:
            return state
    } 

}

export default categoryReducer