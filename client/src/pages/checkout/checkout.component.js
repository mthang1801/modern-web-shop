import React from "react";
import Checkout from "../../components/checkout/checkout.component";
import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectIsLoadingUser,
} from "../../redux/user/user.selectors";
import { selectTotalPrice } from "../../redux/cart/cart.selectors";
import Spinner from "../../components/spinner/spinner.component";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import { CheckoutContainer, CheckoutPay } from "./Checkout.styles";
const CheckoutPage = ({ currentUser, loading, totalPrice, match }) => {
  console.log(loading);
  if (loading) return <Spinner />;
  if (!currentUser && !loading) {
    return (
      <Redirect
        to={{ pathname: "/auth/signin", state: { from: `${match.path}` } }}
      />
    );
  }
  return (
    <CheckoutContainer>
      <Checkout />
      <CheckoutPay>
        <StripeButton price={totalPrice} />
      </CheckoutPay>
    </CheckoutContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loading: selectIsLoadingUser,
  totalPrice: selectTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
