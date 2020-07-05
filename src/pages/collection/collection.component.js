import React from "react";
import SHOP_DATA from "../../data/shop.data";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {CollectionContainer, CollectionTitle, CollectionItems} from "./collection.styles";
const CollectionPage = ({match}) => {
  console.log(match.params.collectionId)  
  const {id, title, routeName, items} = SHOP_DATA[match.params.collectionId]; 
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
      {items.map(item => (
        <CollectionItem key={item.id} {...item} />
      ))}
      </CollectionItems>     
    </CollectionContainer>
  )
}
export default CollectionPage;