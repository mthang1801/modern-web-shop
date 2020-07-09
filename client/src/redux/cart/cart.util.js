export const addItemToCartUtility = (cartItems, itemToAdd) => {
  const checkExistedCartItem = cartItems.find(
    (item) => item.id === itemToAdd.id
  );
  if (!checkExistedCartItem)
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  return cartItems.map((item) => {
    return item.id === itemToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item;
  });
};

export const decreaseCartItemUtility = (cartItems, itemToDecrease) =>
  cartItems.map((item) => {
    return item.id === itemToDecrease.id
      ? {
          ...item,
          quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
        }
      : item;
  });

export const increaseCartItemUtility = (cartItems, itemToIncrease) =>
  cartItems.map((item) => {
    return item.id === itemToIncrease.id
      ? { ...item, quantity: item.quantity + 1 }
      : item;
  });

export const removeCartItemUtility = (cartItems, itemToRemove) =>
  cartItems.filter((item) => item.id !== itemToRemove.id);
