import React, { useEffect } from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Switch, Route } from "react-router-dom";
import {
  fetchCollectionsStart,
  fetchCollectionFail,
  fetchCollectionsSuccess,
} from "../../redux/shop/shop.actions";
import { getCollections } from "../../utils/firebase";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import { createStructuredSelector } from "reselect";
import { selectCollectionsIsLoading } from "../../redux/shop/shop.selectors";
const Shoppage = ({
  match,
  fetchCollectionsSuccess,
  fetchCollectionsStart,
  fetchCollectionFail,
  isLoading,
}) => {
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
      try {
        fetchCollectionsStart();
        fetchCollectionsSuccess(await getCollections());
      } catch (error) {
        fetchCollectionFail(error.message);
      }
    };
    fetchData();
  }, [fetchCollectionsStart]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Switch>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionsIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsSuccess: (collections) =>
    dispatch(fetchCollectionsSuccess(collections)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchCollectionFail: () => dispatch(fetchCollectionFail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shoppage);
