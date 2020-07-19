import NavigationPersonItem from "./navigation-person-item.component";
import {connect} from "react-redux";
import {selectIsLoadingUser} from "../../redux/user/user.selectors";
import WithSpinner from "../../hoc/with-spinner/with-spinner.hoc";
import {createStructuredSelector} from "reselect";
const mapStateToProps = createStructuredSelector({
  isLoading : selectIsLoadingUser
})

const NavigationPersonItemContainer = connect(mapStateToProps)(WithSpinner(NavigationPersonItem));

export default NavigationPersonItemContainer;