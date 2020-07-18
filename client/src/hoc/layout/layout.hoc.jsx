import React, {Fragment} from "react" ; 
import SideDrawer from "../../components/navigation/side-drawer/side-drawer.component";
const Layout = props => {
  return (
    <Fragment>
      <SideDrawer />
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout