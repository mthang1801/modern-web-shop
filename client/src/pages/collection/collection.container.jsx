import Colelction from "./collection.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import { isCollectionPageLoaded} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../hoc/with-spinner/with-spinner.hoc";

const mapStateToProps = createStructuredSelector({
  isLoading : state =>  !isCollectionPageLoaded(state)
})

const CollectionContainer = connect(mapStateToProps)(WithSpinner(Colelction));
export default CollectionContainer