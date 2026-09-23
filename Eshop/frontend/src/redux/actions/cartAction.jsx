
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { GET_ERROR,ADD_TO_CART_USER,GET_CART_USER} from "../Type";


export const addToCart = (body) => async (dispatch) => {
  try {
     const response = await useInsertData('/cart', body);
   
    dispatch({
      type: ADD_TO_CART_USER,
      payload: response,
    });
  } catch (e) {

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });

    throw e;

  }
};

export const getCartItem = () => async (dispatch) => {
  try {
     const response = await useGetDataWithToken('/cart');
   
    dispatch({
      type: GET_CART_USER,
      payload: response,
    });
  } catch (e) {

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });

    throw e;

  }
};
