import {connect} from "react-redux"  ;
import CollectionsOverview from "./collections-overview.component"
import {createStructuredSelector} from "reselect";
import {selectCollectionsIsLoading} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../hoc/with-spinner/with-spinner.hoc";
const mapStateToProps = createStructuredSelector({
  isLoading : selectCollectionsIsLoading
})

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

export default CollectionsOverviewContainer;