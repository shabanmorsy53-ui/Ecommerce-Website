import {ADD_TO_CART, GET_ERROR,DELETE_FROM_WISHLIST,GET_ALL_WISHLIST} from "../Type";

const initial = {
  addToWishlist: [],
  deleteFromWislist: [],
  allwishlist: [],
  loading: true,
};

const wishListReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addToWishlist: action.payload,
        loading: false,
      };
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        deleteFromWislist: action.payload,
        loading: false,
      };
    case GET_ALL_WISHLIST:
      return {
        ...state,
        allwishlist: action.payload,
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

export default wishListReducer;
