import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  Title,
  Items,
} from "./collections-preview.styles";
import { withRouter } from "react-router-dom";
const CollectionsPreview = ({
  title,
  id,
  routeName,
  items,
  history,
  match,
}) => {
  return (
    <CollectionPreviewContainer>
      <Title onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title}
      </Title>
      <Items>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Items>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionsPreview);
