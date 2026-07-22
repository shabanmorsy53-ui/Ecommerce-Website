
import useGetData from "../../hook/useGetData";
import { GET_ALL_CATEGORY , GET_ERROR} from "../Type";


export const getAllCategory = () => async(dispatch) => {

    try{


        const response = await useGetData('/categories?fields=name');
      

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