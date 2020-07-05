import React from "react";
import CollectionsPreview from "../collections-preview/collections-preview.component";
import {CollectionOverviewContainer} from "./collections-overview.styles"
const CollectionsOverview = ({ data }) => {
  return (
    <CollectionOverviewContainer>
      {Object.keys(data)
        .map((collectionItem) => data[collectionItem])
        .map((item) => (
          <CollectionsPreview key={item.id} {...item} />
        ))}
    </CollectionOverviewContainer>
  );
};

export default CollectionsOverview;
