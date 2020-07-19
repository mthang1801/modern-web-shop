import React, { useRef, useEffect } from "react";
import Button from "../custom-button/custom-button.component";
import {
  CartDropdownContainer,
  CartDropdownItems,
  CartDropdownFooter,
  NoCartItems,
} from "./cart-dropdown.styles";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { closeCart } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";
import {
  selectCartShow,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
const CartDropdown = ({ cartItems, history, match, closeCart }) => {
  const cardDropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (cardDropdownRef && !cardDropdownRef.current.contains(e.target)) {
        closeCart();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [cardDropdownRef]);
  return (
    <CartDropdownContainer ref={cardDropdownRef}>
      <CartDropdownItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <NoCartItems>No items in cart</NoCartItems>
        )}
      </CartDropdownItems>
      <CartDropdownFooter>
        <Button
          size="small"
          color="white"
          variant="contained"
          bgColor="#1a237e "
          onClick={() => {
            history.push("/checkout");
            closeCart();
          }}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
      </CartDropdownFooter>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(closeCart()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
