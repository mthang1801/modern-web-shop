import cartActionTypes from "./cart.types";
import { addItemToCartUtility } from "./cart.util";
const INITIAL_STATE = {
  cartItems: [],
  show: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return {
        ...state,
        show: !state.show,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartUtility(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
