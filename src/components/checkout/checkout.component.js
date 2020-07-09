import React from "react";
import {
  CheckoutTable,
  CheckoutHeader,
  ProductBlock,
  QuantityBlock,
  PriceBlock,
  DescriptionBlock,
  TotalPriceBlock,
  RemoveBlock,
  CheckoutBody,
  CheckoutFooter,
  TotalPrice,
} from "./checkout.styles";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutItem from "../checkout-item/checkout-item.component";
import {
  selectTotalPrice,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const Checkout = ({ cartItems, totalPrice }) => {
  if (!cartItems.length) return <Redirect to="/" />;
  return (
    <CheckoutTable>
      <CheckoutHeader>
        <ProductBlock>Product</ProductBlock>
        <DescriptionBlock>Description</DescriptionBlock>
        <QuantityBlock>Quantity</QuantityBlock>
        <PriceBlock>Price</PriceBlock>
        <TotalPriceBlock>Total Price</TotalPriceBlock>
        <RemoveBlock>Remove</RemoveBlock>
      </CheckoutHeader>
      <CheckoutBody>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </CheckoutBody>
      <CheckoutFooter>
        <ProductBlock />
        <DescriptionBlock />
        <QuantityBlock />
        <PriceBlock>Total Price: </PriceBlock>
        <TotalPrice>${totalPrice}</TotalPrice>
        <RemoveBlock />
      </CheckoutFooter>
    </CheckoutTable>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(Checkout);
