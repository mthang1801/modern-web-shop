import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartShow } from "../../redux/cart/cart.selectors";
import {
  selectCurrentUser,
  selectIsLoadingUser,
} from "../../redux/user/user.selectors";
import { clearCartItems } from "../../redux/cart/cart.actions";
import Toolbar from "../navigation/toolbar/toolbar.component";
import { HeaderContainer } from "./header.styles";
const Header = (props) => {
  return (
    <HeaderContainer>
      <Toolbar />
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCartIcon: selectCartShow,
  loadingUser: selectIsLoadingUser,
});
const mapDispatchToProps = (dispatch) => ({
  clearCartItems: () => dispatch(clearCartItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
