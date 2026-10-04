
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateReview } from "../../hook/useUpdateData";
import {
  GET_ERROR,
  CREATE_CASH_ORDER,
  GET_USER_ORDER,
  GET_ONE_ORDER,
  CHANGE_PAY_ORDER,
  CHANGE_DELIVER_ORDER
} from "../Type";

export const createCashOrder = (id , body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/orders/${id}`, body);

    dispatch({
      type: CREATE_CASH_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getUserOrder = () => async (dispatch) => {
  try {
    const response = await useGetDataWithToken('/orders');

    dispatch({
      type: GET_USER_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await useGetDataWithToken(`/orders/${id}`);

    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const changePayOrder = (id) => async (dispatch) => {
  try {
    const response = await useUpdateReview(`/orders/${id}/pay`);

    dispatch({
      type: CHANGE_PAY_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const changeDeliverOrder = (id) => async (dispatch) => {
  try {
    const response = await useUpdateReview(`/orders/${id}/deliver`);

    dispatch({
      type: CHANGE_DELIVER_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};