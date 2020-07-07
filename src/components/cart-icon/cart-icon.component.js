import React from "react";
import {
  CartIconImage,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <CartIconImage />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => {
  console.log("I am being called");
  return {
    itemCount: cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    ),
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
