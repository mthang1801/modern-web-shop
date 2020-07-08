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
    case cartActionTypes.CLOSE_CART:
      return {
        ...state,
        show: false,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCartUtility(state.cartItems, action.payload),
      };
    case cartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };
    case cartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          return item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  item.quantity === 1 ? item.quantity : item.quantity - 1,
              }
            : item;
        }),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
