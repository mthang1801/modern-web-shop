import React, { Fragment, useContext } from "react";
import drawerContext from "../../../contexts/drawer/drawer.context";
import CartIcon from "../../cart-icon/cart-icon.component";
import { CustomLink } from "../../custom-link/custom-link.styles";
import { Option } from "./navigation-items.styles";
import { auth } from "../../../utils/firebase";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartShow } from "../../../redux/cart/cart.selectors";
import {setCloseDrawer} from "../../../redux/drawer/drawer.actions";
import {
  selectCurrentUser,
  selectIsLoadingUser,
} from "../../../redux/user/user.selectors";
import { clearCartItems } from "../../../redux/cart/cart.actions";
import {
  FaHome,
  FaShoppingBag,
  FaFirstOrder,
  FaSignInAlt,
  FaSignOutAlt,
  FaShoppingCart
} from "react-icons/fa";
const NavigationItems = ({ currentUser, loadingUser, location, onMobile, setCloseDrawer }) => {
  const {setShowDrawer} = useContext(drawerContext)
  return (
    <React.Fragment>
      <Option>
        <CustomLink to="/" icon={<FaHome />} onMobile={onMobile} onClick={setCloseDrawer.bind(this)}>
          Home
        </CustomLink>
      </Option>
      <Option>
        <CustomLink to="/shop" icon={<FaShoppingBag />} onMobile={onMobile}  onClick={setCloseDrawer.bind(this)}>
          Shop
        </CustomLink>
      </Option>
      {currentUser && (
        <Option>
          <CustomLink to="/ordered" icon={<FaFirstOrder />} onMobile={onMobile}  onClick={setCloseDrawer.bind(this)}>
            Ordered
          </CustomLink>
        </Option>
      )}
      {onMobile && <Option>
          <CustomLink to="/checkout" icon={<FaShoppingCart />} onMobile={onMobile}  onClick={setCloseDrawer.bind(this)}>
            Checkout 
          </CustomLink>
        </Option>}
      {!onMobile && location.pathname.search(/checkout|auth/gi) === -1 && (
        <CartIcon />
      )}
      {!loadingUser && (
        <Option>
          {currentUser ? (
            <CustomLink
              as="div"
              onClick={() => {
                auth.signOut();
                clearCartItems();
              }}
              icon={<FaSignInAlt />}
              onMobile={onMobile}
              onClick={setCloseDrawer.bind(this)}
            >
              Sign Out
            </CustomLink>
          ) : (
            <CustomLink
              to="/auth/signin"
              icon={<FaSignOutAlt />}
              onMobile={onMobile}
              onClick={setCloseDrawer.bind(this)}
            >
              Sign In
            </CustomLink>
          )}
        </Option>
      )}
     
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  showCartIcon: selectCartShow,
  loadingUser: selectIsLoadingUser,
});
const mapDispatchToProps = (dispatch) => ({
  clearCartItems: () => dispatch(clearCartItems()),
  setCloseDrawer : () => dispatch(setCloseDrawer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavigationItems));
