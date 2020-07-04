import React from "react";
import {CollectionItemContainer, BackgroundImageContainer, CollectionItemContent, CollectionItemName, CollectionItemPrice, AddButton} from "./collection-item.styles";
const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <CollectionItemContent>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionItemContent>     
      <AddButton>Add to cart</AddButton>    
    </CollectionItemContainer>
  );
};

export default CollectionItem;
