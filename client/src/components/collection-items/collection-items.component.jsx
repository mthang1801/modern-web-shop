import React from "react";
import {CollectionItemsContainer} from "./collection-items.styles";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionItems = ({items}) => {
  return(
    <CollectionItemsContainer>
       {items         
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
    </CollectionItemsContainer>
  )
}

export default CollectionItems