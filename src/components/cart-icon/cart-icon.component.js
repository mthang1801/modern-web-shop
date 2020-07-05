import React from "react"; 
import {CartIconImage, CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = (props) => {
  return (
    <CartIconContainer onClick={props.onClick}>
      <CartIconImage />
      <ItemCount>50</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;