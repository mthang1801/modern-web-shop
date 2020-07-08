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

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  totalPrice: cartItems.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  ),
});

export default connect(mapStateToProps)(Checkout);
