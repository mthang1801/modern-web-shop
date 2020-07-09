import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCartItems } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const StripeButton = ({ price, clearCartItems }) => {
  const publish_key =
    "pk_test_51H2ox9KqyLpFyVsNQPr7V1eFkeRTtEtdG7vgXAlM4E3UiDJ9U8MXv5RtLoo2qLMW6qckNvDbwf5PcZXmNfbAJhQd00zyZ5D9ir";
  const priceForStripe = price * 1000; //based on cents
  const onToken = async (token) => {
    try {
      const res = await axios({
        method: "POST",
        url: "payment",
        data: {
          token,
          amount: priceForStripe,
        },
      });
      clearCartItems();
      alert("Payment success");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StripeCheckout
      name="Modern Clothes"
      description={`Your total payment $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      panelLabel="Pay Now"
      amount={priceForStripe}
      currency="USD"
      stripeKey={publish_key}
      shippingAddress
      billingAddress
      zipCode={false}
      token={onToken}
    />
  );
};

export default connect(null, { clearCartItems })(StripeButton);
