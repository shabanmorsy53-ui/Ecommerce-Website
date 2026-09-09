import { useInsertData } from "../../hook/useInsertData";
import { useUpdateData } from "../../hook/useUpdateData";
import {CREATE_NEW_USER,LOGIN_USER,FORGET_PASSWORD,VERFIY_PASSWORD,RESET_PASSWORD} from "../Type";





export const createNewUser = (data) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertData('/auth/signup',data);
        console.log(response.data);

        dispatch({
            type: CREATE_NEW_USER,
            payload : response,
            loading : true
        })

    }catch(e){

        dispatch({
            type: CREATE_NEW_USER ,
            payload : e.response,
        })
    }
}

export const loginUser = (data) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertData('/auth/login',data);
        console.log(response.data);

        dispatch({
            type: LOGIN_USER,
            payload : response,
            loading : true
        })

    }catch(e){


        dispatch({
            type: LOGIN_USER,
            payload : e.response,
        })
    }
}

export const forgetPassword = (data) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertData('/auth/forgotPassword',data);
        console.log(response.data);

        dispatch({
            type: FORGET_PASSWORD,
            payload : response,
            loading : true
        })

    }catch(e){
        dispatch({
            type: FORGET_PASSWORD,
            payload : e.response,
        })
    }
}

export const verfiyPassword = (data) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertData('/auth/verifyResetCode',data);
        console.log(response.data);

        dispatch({
            type: VERFIY_PASSWORD,
            payload : response,
            loading : true
        })

    }catch(e){
        dispatch({
            type: VERFIY_PASSWORD,
            payload : e.response,
        })
    }
}

export const resetPassword = (data) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useUpdateData('/auth/resetPassword',data);
        console.log(response.data);

        dispatch({
            type: RESET_PASSWORD,
            payload : response,
            loading : true
        })

    }catch(e){
        dispatch({
            type: RESET_PASSWORD,
            payload : e.response,
        })
    }
}