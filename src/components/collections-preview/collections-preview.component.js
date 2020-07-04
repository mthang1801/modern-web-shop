import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, Title, Items} from "./collections-preview.styles";
const CollectionsPreview = ({ title, id, routeName, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title}</Title>
      <Items >
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </Items>
    </CollectionPreviewContainer>
  );
};

export default CollectionsPreview;
