import { useDeleteData } from "../../hook/useDeleteData";
import { useGetDataWithToken } from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";

import { GET_ERROR, CREATE_ADDRESS ,GET_ADDRESS , DELETE_ADDRESS} from "../Type";

export const addNewAddress = (body) => async (dispatch) => {
  try {
    const response = await useInsertData("/addresses", body);

    dispatch({
      type: CREATE_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getUserAddress = (body) => async (dispatch) => {
  try {
    const response = await useGetDataWithToken("/addresses", body);

    dispatch({
      type: GET_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/addresses/${id}`);

    dispatch({
      type: DELETE_ADDRESS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};
