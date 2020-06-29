import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Switch, Route } from "react-router-dom";
class Shoppage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={match.path}
            render={(props) => (
              <CollectionsOverview {...props} data={SHOP_DATA} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Shoppage;
