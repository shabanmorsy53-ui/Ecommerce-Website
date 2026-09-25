import {
  GET_ERROR,
  ADD_TO_CART_USER,
  GET_CART_USER,
  CLEAR_CART_USER,
  REMOVE_SPACEFIC_CART_ITEM,
  UPDATE_CART_ITEM_QUAN,
  DISCOUNT_COUPON,
} from "../Type";

const initial = {
  addtocart: [],
  cartitem: [],
  clearcart: [],
  removespacefic: [],
  updatequancart: [],
  discountcoupon: [],
  loading: true,    
};

const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_CART_USER:
      return {
        ...state,
        addtocart: action.payload,
        loading: false,
      };
    case GET_CART_USER:
      return {
        ...state,
        cartitem: action.payload,
        loading: false,
      };
    case CLEAR_CART_USER:
      return {
        ...state,
        clearcart: action.payload,
        loading: false,
      };
    case REMOVE_SPACEFIC_CART_ITEM:
      return {
        ...state,
        removespacefic: action.payload,
        loading: false,
      };
    case UPDATE_CART_ITEM_QUAN:
      return {
        ...state,
        updatequancart: action.payload,
        loading: false,
      };
    case DISCOUNT_COUPON:
      return {
        ...state,
        discountcoupon: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        loading: true,
        brand: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
