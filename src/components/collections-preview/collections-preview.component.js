import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionsPreview = ({ title, id, routeName, items }) => {
  return (
    <div className="collections-preview">
      <div className="title">{title}</div>
      <div className="items">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionsPreview;
