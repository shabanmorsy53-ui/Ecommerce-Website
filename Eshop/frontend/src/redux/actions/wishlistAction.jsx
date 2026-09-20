
import { useDeleteData } from "../../hook/useDeleteData";
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import {ADD_TO_CART,GET_ERROR,DELETE_FROM_WISHLIST,GET_ALL_WISHLIST} from "../Type";


export const addWishlist = (body) => async (dispatch) => {
  try {


    const response = await useInsertData('/wishlist',body);

    console.log(response);


    dispatch({
      type: ADD_TO_CART,
      payload: response,
    });

     return response;
  } catch (e) {
       

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const deleteFromWishlist = (id) => async (dispatch) => {
  try {


    const response = await useDeleteData(`/wishlist/${id}`);

    console.log(response);


    dispatch({
      type: DELETE_FROM_WISHLIST,
      payload: response,
    });

     return response;
  } catch (e) {
       

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getAllWishlist = () => async (dispatch) => {
  try {


    const response = await useGetDataWithToken(`/wishlist`);

  

    console.log("WISHLIST API RESPONSE:", response);



    dispatch({
      type: GET_ALL_WISHLIST,
      payload: response,
    });

     return response;
  } catch (e) {
       
     console.log("WISHLIST ERROR:", e.response?.data);

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};