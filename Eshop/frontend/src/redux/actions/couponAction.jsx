
import { useDeleteData } from "../../hook/useDeleteData";
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateReview } from "../../hook/useUpdateData";
import {
  CREATE_COUPON,
  GET_ERROR,
  GET_ALL_COUPON,
  DELETE_COUPON,GET_ONE_COUPON,EDIT_COUPON
} from "../Type";

export const createCoupon = (body) => async (dispatch) => {
  try {
    const response = await useInsertData("/coupons", body);

    dispatch({
      type: CREATE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getAllCoupon = () => async (dispatch) => {
  try {
    const response = await useGetDataWithToken("/coupons");

    dispatch({
      type: GET_ALL_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getOneCoupon = (id) => async (dispatch) => {
  try {
    const response = await useGetDataWithToken(`/coupons/${id}`);

    dispatch({
      type: GET_ONE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const deleteCoupon = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/coupons/${id}`);

    dispatch({
      type: DELETE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const editCoupon = (id,body) => async (dispatch) => {
  try {
    const response = await useUpdateReview(`/coupons/${id}` , body);

    dispatch({
      type: EDIT_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};