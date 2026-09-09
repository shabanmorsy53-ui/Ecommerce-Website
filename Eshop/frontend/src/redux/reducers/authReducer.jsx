import  {CREATE_NEW_USER, LOGIN_USER,FORGET_PASSWORD,VERFIY_PASSWORD,RESET_PASSWORD}  from "../Type"

const initial = {
    createUser : [],
    loginUser : null,
    forgetPassword : [],
    verfiyPassword : [],
    resetPassword : [],
    loading : true,
}

const authReducer = (state = initial , action) => {

    switch (action.type){
        case CREATE_NEW_USER: 
        return {
            ...state,
            createUser:action.payload,
            loading:false,
        }
        case LOGIN_USER: 
        return {
            ...state,
            loginUser:action.payload,
            loading:false,
        }
        case FORGET_PASSWORD: 
        return {
            ...state,
            forgetPassword:action.payload,
            loading:false,
        }
        case VERFIY_PASSWORD: 
        return {
            ...state,
            verfiyPassword:action.payload,
            loading:false,
        }
        case RESET_PASSWORD: 
        return {
            ...state,
            resetPassword:action.payload,
            loading:false,
        }
        default:
            return state
    } 

}



export default authReducer;