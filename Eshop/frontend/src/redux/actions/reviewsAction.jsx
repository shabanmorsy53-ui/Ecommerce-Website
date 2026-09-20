import { useDeleteData } from "../../hook/useDeleteData";
import useGetData from "../../hook/useGetData";
import { useInsertData } from "../../hook/useInsertData";
import { useUpdateReview } from "../../hook/useUpdateData";
import { CREATE_REVIEWS,GET_ERROR,GET_REVIEWS,DELETE_REVIEWS ,UPDATE_REVIEW} from "../Type";


export const createReviews = (id,body) => async (dispatch) => {
  try {

    
    console.log("CREATE REVIEW START");
    console.log("ID:", id);
    console.log("BODY:", body);


    const response = await useInsertData(`/products/${id}/reviews/`, body);
     console.log("CREATE REVIEW RESPONSE:", response);


    dispatch({
      type: CREATE_REVIEWS,
      payload: response,
    });
  } catch (e) {

     console.log("CREATE REVIEW CATCH");
    console.log("FULL ERROR:", e);
    console.log("ERROR RESPONSE:", e.response);
    console.log("ERROR DATA:", e.response?.data);
    dispatch({
      type: GET_ERROR,
      payload: e.response?.data || "Error",
    });

    throw e;

  }
};


export const getReview = (id) => async (dispatch) => {
  try {


    const response = await useGetData(`/products/${id}/reviews/`);


    dispatch({
      type: GET_REVIEWS,
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

export const deleteReview = (id) => async (dispatch) => {
  try {


    const response = await useDeleteData(`reviews/${id}`);


    dispatch({
      type: DELETE_REVIEWS,
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

export const upDateReview = (id,body) => async (dispatch) => {
  try {


    const response = await useUpdateReview(`reviews/${id}`,body);


    dispatch({
      type: UPDATE_REVIEW,
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