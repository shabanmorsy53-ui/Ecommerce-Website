

import useGetData from "../../hook/useGetData";
import {useInsertData} from '../../hook/useInsertData'
import { CREATE_SUB_CATE , GET_ERROR , } from "../Type";


export const createSubCategory = (data) => async(dispatch) => {

    try{

        // const res = await baseUrl.get('/categories?fields=name');

        const response = await useInsertData('/subcategories/',data);
        console.log(response.data);

        dispatch({
            type: CREATE_SUB_CATE,
            payload : response.data,
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : 'Error' + e,
        })
    }
}