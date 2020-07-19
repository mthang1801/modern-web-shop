import React from "react" ; 
import {SideDrawerContainer, DrawerMenu} from "./side-drawer.styles";
import Modal from "../../modal/modal.component";
import NavigationItems from "../navigation-items/navigation-items.component";
import {createStructuredSelector} from "reselect";
import {selectOpenDrawer} from "../../../redux/drawer/drawer.selectors";
import {setCloseDrawer} from "../../../redux/drawer/drawer.actions";
import {connect} from "react-redux";
const SideDrawer = ({show, setCloseDrawer}) => {
  return (
    <SideDrawerContainer show={show}>      
      <Modal onClick={setCloseDrawer.bind(this)} />
      <DrawerMenu show={show} >
        <NavigationItems onMobile/>
      </DrawerMenu>
    </SideDrawerContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  show : selectOpenDrawer
})

const mapDispatchToProps = dispatch => ({
  setCloseDrawer : () => dispatch(setCloseDrawer())
})


export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);