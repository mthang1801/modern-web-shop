import cartActionTypes from "./cart.types";

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART,
});

export const closeCart = () => ({
  type: cartActionTypes.CLOSE_CART,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const increaseItem = (id) => ({
  type: cartActionTypes.INCREASE_ITEM,
  payload: { id },
});

export const decreaseItem = (id) => ({
  type: cartActionTypes.DECREASE_ITEM,
  payload: { id },
});

export const removeItem = (id) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: { id },
});

export const clearCartItems = () => ({
  type: cartActionTypes.CLEAR_CART_ITEMS,
});
