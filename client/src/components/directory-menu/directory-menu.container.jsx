import {connect} from "react-redux";
import {selectDirectoryIsLoading} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";
import Directory from "./directory-menu.component";
import WithSpinner from "../../hoc/with-spinner/with-spinner.hoc";
const mapStateToProps = createStructuredSelector({
  isLoading : selectDirectoryIsLoading
})

const DirectoryContainer = connect(mapStateToProps)(WithSpinner(Directory));

export default DirectoryContainer;