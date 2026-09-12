
import {useInsertDataWithImage} from '../../hook/useInsertData'
import { CREATE_PRODUCT , GET_ERROR } from "../Type";

// export const createProducts = (formData) => async(dispatch) => {

//     try{

//         // const res = await baseUrl.get('/categories?fields=name');

//         const response = await useInsertDataWithImage('/products',formData);
//         console.log(response.data);

//         dispatch({
//             type: CREATE_PRODUCT,
//             payload : response.data,
//         })

//     }catch(e){

//         dispatch({
//             type: GET_ERROR ,
//             payload : 'Error' + e,
//         })
//     }
// }


export const createProducts = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage("/products", formData);

    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
    });
  } catch (e) {
    

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};