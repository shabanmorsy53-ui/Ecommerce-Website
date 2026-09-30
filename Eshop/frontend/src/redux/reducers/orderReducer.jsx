import {
    CREATE_CASH_ORDER,
  GET_ERROR,
  GET_USER_ORDER,

} from "../Type";

const initial = {
  cashorder: [],
  getorder: [],
  loading: true,
};

const orderReducer = (state = initial, action) => {
  switch (action.type) {
    case CREATE_CASH_ORDER:
      return {
        ...state,
        cashorder: action.payload,
        loading: false,
      };
    case GET_USER_ORDER:
      return {
        ...state,
        getorder: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
