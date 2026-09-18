import { CREATE_REVIEWS, GET_ERROR, GET_REVIEWS,DELETE_REVIEWS } from "../Type";

const initial = {
  review: [],
  personReview: [],
  deleteReview: [],
  loading: true,
};

const reviewReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_REVIEWS:
      return {
        ...state,
        review: action.payload,
        loading: false,
      };

    case GET_REVIEWS:
      return {
        ...state,
        personReview: action.payload,
        loading: false,
      };
    case DELETE_REVIEWS:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      };

    case GET_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reviewReducer;
