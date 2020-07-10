import React, { useEffect } from "react";
import { default as CollectionsOverview } from "../../components/collections-overview/collections-overview.container";
import { default as CollectionPage } from "../collection/collection.container";
import { Switch, Route } from "react-router-dom";
import { fetchCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

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
    fetchCollections();
  }, [fetchCollections]);

  return (
    <Switch>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(Shoppage);
