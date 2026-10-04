import {
  CHANGE_DELIVER_ORDER,
  CHANGE_PAY_ORDER,
    CREATE_CASH_ORDER,
  GET_ERROR,
  GET_ONE_ORDER,
  GET_USER_ORDER,

} from "../Type";

const initial = {
  cashorder: [],
  getorder: [],
  oneorder: [],
  pay: [],
  deliver: [],
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
    case GET_ONE_ORDER:
      return {
        ...state,
        oneorder: action.payload,
        loading: false,
      };
    case CHANGE_PAY_ORDER:
      return {
        ...state,
        pay: action.payload,
        loading: false,
      };
    case CHANGE_DELIVER_ORDER:
      return {
        ...state,
        deliver: action.payload,
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
