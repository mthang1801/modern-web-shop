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
