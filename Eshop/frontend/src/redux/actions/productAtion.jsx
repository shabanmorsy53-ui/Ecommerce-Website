import { useDeleteData } from "../../hook/useDeleteData";
import useGetData from "../../hook/useGetData";
import { useInsertDataWithImage } from "../../hook/useInsertData";
import { useUpdateDataWithImage } from "../../hook/useUpdateData";
import {
  CREATE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT,
  GET_PRODUCT_DETALIS,
  GET_PRODUCT_LIKE,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../Type";

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

export const getAllProduct = () => async (dispatch) => {
  try {
    const response = await useGetData("/products");

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getSearchProduct = (word,sortWord = '') => async (dispatch) => {
  try {
    const response = await useGetData(`/products?keyword=${word}&sort=${sortWord}`);

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getSortProduct = (sortWord) => async (dispatch) => {
  try {
    const response = await useGetData(`/products?sort=${sortWord}`);

    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/products/${id}`);

    dispatch({
      type: GET_PRODUCT_DETALIS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const getLikeProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/products/?category=${id}`);

    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

export const upDateProduct = (id,data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(`/products/${id}`,data);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};

// export const deleteProduct = (id) => async (dispatch) => {
//   try {
//     const response = await useDeleteData(`/products/${id}`);

//     dispatch({
//       type: DELETE_PRODUCT,
//       payload: response,
//     });
//   } catch (e) {

//     dispatch({
//       type: GET_ERROR,
//       payload: e.response?.data || "Error",
//     });
//   }
// };

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/products/${id}`);

    console.log("DELETE SUCCESS:", response);

    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
    });
  } catch (e) {
    console.log("DELETE ERROR STATUS:", e.response?.status);
    console.log("DELETE ERROR DATA:", e.response?.data);

    console.log("FULL DELETE ERROR:", e);
    console.log("MESSAGE:", e.message);
    console.log("RESPONSE:", e.response);

    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });
  }
};
