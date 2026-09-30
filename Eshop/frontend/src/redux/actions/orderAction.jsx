
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import {
  GET_ERROR,
  CREATE_CASH_ORDER,
  GET_USER_ORDER
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