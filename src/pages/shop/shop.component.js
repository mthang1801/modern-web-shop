import React, { useEffect } from "react";
import SHOP_DATA from "./shop.data";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { Switch, Route } from "react-router-dom";
const Shoppage = ({ match }) => {
  console.log(match.path);
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

  return (
    <Switch>
      <Route
        exact
        path={match.path}
        render={(props) => <CollectionsOverview {...props} data={SHOP_DATA} />}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Switch>
  );
};

export default Shoppage;
