import React from "react";
import {
  CollectionItemContainer,
  BackgroundImageContainer,
  CollectionItemContent,
  CollectionItemName,
  CollectionItemPrice,
  AddButton,
} from "./collection-item.styles";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
const CollectionItem = ({ addItem, item }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <CollectionItemContent>
        <CollectionItemName>{name}</CollectionItemName>
        <CollectionItemPrice>${price}</CollectionItemPrice>
      </CollectionItemContent>
      <AddButton onClick={() => addItem(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
