import React from "react";
import Button from "../custom-button/custom-button.component";
import {
  CartDropdownContainer,
  CartDropdownItems,
  CartDropdownFooter,
  NoCartItems,
} from "./cart-dropdown.styles";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
const CartDropdown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <CartDropdownContainer>
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
        >
          Checkout
        </Button>
      </CartDropdownFooter>
    </CartDropdownContainer>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
