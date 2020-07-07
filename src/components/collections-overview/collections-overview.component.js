import React from "react";
import CollectionsPreview from "../collections-preview/collections-preview.component";
import { CollectionOverviewContainer } from "./collections-overview.styles";
import { connect } from "react-redux";
const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {Object.keys(collections)
        .map((collectionItem) => collections[collectionItem])
        .map((item) => (
          <CollectionsPreview key={item.id} {...item} />
        ))}
    </CollectionOverviewContainer>
  );
};

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});
export default connect(mapStateToProps)(CollectionsOverview);
