import React from "react";
import CollectionsPreview from "../collections-preview/collections-preview.component";
import { CollectionOverviewContainer } from "./collections-overview.styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsOverview } from "../../redux/shop/shop.selectors";
const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <CollectionOverviewContainer>
      {collections.map((item) => (
        <CollectionsPreview key={item.id} {...item} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsOverview,
});
export default connect(mapStateToProps)(CollectionsOverview);
