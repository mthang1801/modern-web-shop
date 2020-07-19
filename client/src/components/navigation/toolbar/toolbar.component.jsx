import React, {useEffect, useContext, useRef} from "react";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import {
  ToolbarContainer,
  Content,
  LogoContainer,
  OptionsOnlyDesktop,
  OptionsOnlyMobile,
  PersonalCardSettingContainer
} from "./toolbar.styles";
import DrawerContext from "../../../contexts/drawer/drawer.context"
import { CustomLink } from "../../custom-link/custom-link.styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartShow } from "../../../redux/cart/cart.selectors";
import { selectShowCardPerson } from "../../../redux/card-person/card-person.selector";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import NavigationItems from "../navigation-items/navigation-items.component";
import ToggleDrawer from "../toggle-drawer/toggle-drawer.component";
import PersonalCardSetting from "../../personal-card-setting/personal-card-setting.component";
const Toolbar = ({ showCartIcon , setToggleDrawer, cardPerson}) => {  
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
      {cardPerson &&  <PersonalCardSettingContainer>
       <PersonalCardSetting />
      </PersonalCardSettingContainer>}           
    </ToolbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  showCartIcon: selectCartShow,
  cardPerson : selectShowCardPerson
});

export default connect(mapStateToProps)(withRouter(Toolbar));
