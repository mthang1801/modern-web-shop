import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  Content,
  LogoContainer,
  OptionsContainer,
  Option,
  CustomLink,
} from "./header.styles";
import { auth } from "../../utils/firebase";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Header = ({ currentUser, showCartIcon, location, match }) => {
  return (
    <HeaderContainer>
      <Content>
        <LogoContainer>
          <CustomLink to="/">
            <Logo />
          </CustomLink>
        </LogoContainer>
        <OptionsContainer>
          <Option>
            <CustomLink to="/shop">Shop</CustomLink>
          </Option>
          <Option>
            <CustomLink to="/ordered">Ordered</CustomLink>
          </Option>
          <Option>
            {currentUser ? (
              <CustomLink as="div" onClick={() => auth.signOut()}>
                Sign Out
              </CustomLink>
            ) : (
              <CustomLink to="/auth/signin">Sign In</CustomLink>
            )}
          </Option>
          {location.pathname.search(/checkout/gi) === -1 && <CartIcon />}
        </OptionsContainer>
      </Content>
      {showCartIcon && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { show } }) => ({
  currentUser,
  showCartIcon: show,
});
export default connect(mapStateToProps)(withRouter(Header));
