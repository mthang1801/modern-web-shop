import React from "react" ;
import Button from "../custom-button/custom-button.component";
import {CartDropdownContainer, CartDropdownItems, CartDropdownFooter} from "./cart-dropdown.styles";

const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartDropdownItems>
        No items in cart
      </CartDropdownItems>
      <CartDropdownFooter>
        <Button size="small" color="white" variant="contained" bgColor="#1a237e ">Checkout</Button>
      </CartDropdownFooter>
    </CartDropdownContainer>
  )
}

export default CartDropdown;