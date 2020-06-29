import React from "react";
import CollectionsPreview from "../collections-preview/collections-preview.component";
const CollectionsOverview = ({ data }) => {
  return (
    <div className="collection-overview">
      {Object.keys(data)
        .map((collectionItem) => data[collectionItem])
        .map((item) => (
          <CollectionsPreview key={item.id} {...item} />
        ))}
    </div>
  );
};

export default CollectionsOverview;
