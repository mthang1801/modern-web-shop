import React from "react";
import {
  CartItemContainer,
  CartItemContent,
  CartItemPrice,
  CartItemImageContainer,
  CartItemName,
} from "./cart-item.styles";
const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <CartItemContainer placeholder={name}>
      <CartItemImageContainer src={imageUrl} alt={imageUrl} />
      <CartItemContent>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          ${price} x {quantity}
        </CartItemPrice>
      </CartItemContent>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
