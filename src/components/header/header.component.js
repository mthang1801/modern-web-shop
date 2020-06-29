import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
const Header = (props) => {
  return (
    <div className="header">
      <div className="content">
        <div className="logo">
          <a href="/">
            <Logo className="logo" />
          </a>
        </div>
        <div className="options">
          <div className="option">
            <a href="/shop">Shop</a>
          </div>
          <div className="option">
            <a href="/ordered">Ordered</a>
          </div>
          <div className="option">
            <a href="/signin">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
