
import { useDeleteData } from "../../hook/useDeleteData";
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateReview } from "../../hook/useUpdateData";
import { GET_ERROR,DISCOUNT_COUPON,ADD_TO_CART_USER,GET_CART_USER,CLEAR_CART_USER,UPDATE_CART_ITEM_QUAN,REMOVE_SPACEFIC_CART_ITEM} from "../Type";


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

export const clearCart = () => async (dispatch) => {
  try {
     const response = await useDeleteData('/cart');
   
    dispatch({
      type:  CLEAR_CART_USER,
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

export const removeSpaceficCartItem = (id) => async (dispatch) => {
  try {
     const response = await useDeleteData(`/cart/${id}`);
   
    dispatch({
      type:  REMOVE_SPACEFIC_CART_ITEM,
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

export const upDateCartItemQ = (id,body) => async (dispatch) => {
  try {
     const response = await useUpdateReview(`/cart/${id}`,body);
   
    dispatch({
      type:  UPDATE_CART_ITEM_QUAN,
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

export const discountCoupon = (body) => async (dispatch) => {
  try {
     const response = await useUpdateReview(`/cart/applyCoupon`,body);
   
    dispatch({
      type:  DISCOUNT_COUPON,
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
