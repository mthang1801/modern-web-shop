import React , {useState} from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";
const Header = (props) => {
  const [toggleDropdown, setToggleDropdown ] = useState(false); 
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
            <a href="/auth/signin">Sign In</a>
          </div>                 
          <CartIcon onClick={() => setToggleDropdown(!toggleDropdown)}/>          
        </div>
      </div>
      {toggleDropdown && <CartDropdown/>}
    </div>
  );
};

export default Header;
