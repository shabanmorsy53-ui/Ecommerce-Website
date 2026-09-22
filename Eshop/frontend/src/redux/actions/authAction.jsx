import { useInsertData } from "../../hook/useInsertData";
import { useUpdateData, useUpdateReview } from "../../hook/useUpdateData";
import {CREATE_NEW_USER,LOGIN_USER,NEW_USER_DATA,GET_CURRENT_USER,NEW_USER_PASSWORD,FORGET_PASSWORD,VERFIY_PASSWORD,RESET_PASSWORD, GET_ERROR} from "../Type";
import useGetData, { useGetDataWithToken } from '../../hook/useGetData'





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
            type: GET_ERROR ,
            payload : e.response,
        })
    }
}

export const getCurrentUser = () => async(dispatch) => {

    try{

        const response = await useGetDataWithToken('/users/getMe/');
  

        dispatch({
            type: GET_CURRENT_USER,
            payload : response,
            loading : true
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : e.response,
        })
    }
}

export const upDateUserPass = (body) => async(dispatch) => {

    try{

        const response = await useUpdateReview('/users/changeMyPassword/',body);
  

        dispatch({
            type: NEW_USER_PASSWORD,
            payload : response,
            loading : true
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : e.response,
        })
    }
}

export const upDateUserData = (body) => async(dispatch) => {

    try{

        const response = await useUpdateReview('users/deActiveMyProfile/',body);
  

        dispatch({
            type: NEW_USER_DATA,
            payload : response,
            loading : true
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
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