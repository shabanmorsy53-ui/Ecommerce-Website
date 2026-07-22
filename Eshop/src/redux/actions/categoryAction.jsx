
import useGetData from "../../hook/useGetData";
import { GET_ALL_CATEGORY , GET_ERROR} from "../Type";


export const getAllCategory = () => async(dispatch) => {

    try{


        const response = await useGetData('/categories?fields=name');
        console.log(response.data);

        dispatch({
            type: GET_ALL_CATEGORY,
            payload : res.data,
        })

    }catch(e){

        dispatch({
            type: GET_ERROR ,
            payload : 'Error' + e,
        })
    }
}