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

const Header = ({ currentUser }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
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
          <CartIcon onClick={() => setToggleDropdown(!toggleDropdown)} />
        </OptionsContainer>
      </Content>
      {toggleDropdown && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});
export default connect(mapStateToProps)(Header);
