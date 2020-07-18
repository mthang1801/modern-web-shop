import React, {useState, useContext} from "react";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {
  ToolbarContainer,
  Content,
  LogoContainer,
  OptionsOnlyDesktop,
  OptionsOnlyMobile,
} from "./toolbar.styles";
import DrawerContext from "../../../contexts/drawer/drawer.context"
import { CustomLink } from "../../custom-link/custom-link.styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartShow } from "../../../redux/cart/cart.selectors";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import NavigationItems from "../navigation-items/navigation-items.component";
import ToggleDrawer from "../toggle-drawer/toggle-drawer.component";
import SideDrawer from "../side-drawer/side-drawer.component"
const Toolbar = ({ showCartIcon , setToggleDrawer}) => {  
  const drawerContext = useContext(DrawerContext);  
  const {showDrawer, setShowDrawer} = drawerContext;  
  return (
    <ToolbarContainer>
      <Content>
        <LogoContainer>
          <CustomLink to="/">
            <Logo />
          </CustomLink>
        </LogoContainer>
        <OptionsOnlyDesktop>
          <NavigationItems onMobile={false}/>
        </OptionsOnlyDesktop>
        <OptionsOnlyMobile>
          <ToggleDrawer onClick={setShowDrawer} />         
        </OptionsOnlyMobile>
      </Content>
      {showCartIcon && <CartDropdown />}
    </ToolbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  showCartIcon: selectCartShow,
});

export default connect(mapStateToProps)(withRouter(Toolbar));
