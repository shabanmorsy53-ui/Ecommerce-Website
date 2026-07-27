

import useGetData from "../../hook/useGetData";
import {useInsertDataWithImage} from '../../hook/useInsertData'
import { GET_ALL_BRAND , GET_ERROR , CREATE_BRAND} from "../Type";


export const getAllBrand = () => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useGetData('/brands?sort=name');
        console.log(response.data);

        dispatch({
            type: GET_ALL_BRAND,
            payload : response.data,
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : 'Error' + e,
        })
    }
}



export const createBrand = (formData) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertDataWithImage('/brands',formData);
        console.log(response.data);

        dispatch({
            type: CREATE_BRAND,
            payload : response.data,
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : 'Error' + e,
        })
    }
}