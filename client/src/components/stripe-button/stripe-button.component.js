import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCartItems } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { addCartItemsToOrderedList } from "../../utils/firebase";
const StripeButton = ({ price, clearCartItems, currentUser, cartItems }) => {
  const publish_key =
    "pk_test_51H2ox9KqyLpFyVsNQPr7V1eFkeRTtEtdG7vgXAlM4E3UiDJ9U8MXv5RtLoo2qLMW6qckNvDbwf5PcZXmNfbAJhQd00zyZ5D9ir";
  const priceForStripe = price * 1000; //based on cents
  const onToken = async (token) => {
    try {
      await axios({
        method: "POST",
        url: "payment",
        data: {
          token,
          amount: priceForStripe,
        },
      });

      await addCartItemsToOrderedList(cartItems, price);
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
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, { clearCartItems })(StripeButton);
