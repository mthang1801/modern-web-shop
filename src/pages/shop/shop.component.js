import React, { useEffect } from "react";
import SHOP_DATA from "./shop.data";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Switch, Route } from "react-router-dom";
import { fetchCollections } from "../../redux/shop/shop.actions";
import { getCollections } from "../../utils/firebase";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
const Shoppage = ({ match, fetchCollections, isLoading }) => {
  useEffect(() => {
    if (match.isExact) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 55,
        behavior: "smooth",
      });
    }
  }, [match.isExact]);

  useEffect(() => {
    const fetchData = async () => {
      fetchCollections(await getCollections());
    };
    fetchData();
  }, [fetchCollections]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Switch>
      <Route
        exact
        path={match.path}
        render={(props) => <CollectionsOverview {...props} />}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  );
};

const mapStateToProps = ({ shop: { loading } }) => ({
  isLoading: loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: (collections) => dispatch(fetchCollections(collections)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
