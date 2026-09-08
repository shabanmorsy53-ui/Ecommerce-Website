import { useInsertData } from "../../hook/useInsertData";
import {CREATE_NEW_USER,LOGIN_USER} from "../Type";





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

          console.log("STATUS:", e.response?.status);
          console.log("ERROR:", e.response?.data);

        dispatch({
            type: LOGIN_USER,
            payload : e.response,
        })
    }
}