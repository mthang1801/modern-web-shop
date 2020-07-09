import React from "react";
import {
  CartIconImage,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import { selectCountItem } from "../../redux/cart/cart.selectors";
const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCart}>
      <CartIconImage />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: (state) => selectCountItem(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
