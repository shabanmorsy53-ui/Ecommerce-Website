
import useGetData from "../../hook/useGetData";
import {useInsertDataWithImage} from '../../hook/useInsertData'
import { GET_ALL_CATEGORY , GET_ERROR , CREATE_CATE} from "../Type";


export const getAllCategory = () => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useGetData('/categories?fields=name');
        console.log(response.data);

        dispatch({
            type: GET_ALL_CATEGORY,
            payload : response.data,
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : 'Error' + e,
        })
    }
}

export const createCategory = (formData) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertDataWithImage('/categories',formData);
        console.log(response.data);

        dispatch({
            type: CREATE_CATE,
            payload : response.data,
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : 'Error' + e,
        })
    }
}