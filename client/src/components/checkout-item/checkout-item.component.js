import React from "react";
import {
  BackgroundImage,
  BackgroundImageContainer,
  CheckoutItemContainer,
  ItemName,
  ItemPrice,
  ItemQuantity,
  ItemTotalPrice,
  RemoveItem,
  IncreaseItem,
  DecreaseItem,
} from "./checkout-item.styles";
import { connect } from "react-redux";
import {
  increaseItem,
  decreaseItem,
  removeItem,
} from "../../redux/cart/cart.actions";
const CheckoutItem = ({
  item: { id, imageUrl, name, price, quantity },
  increaseItem,
  decreaseItem,
  removeItem,
}) => {
  return (
    <CheckoutItemContainer>
      <BackgroundImageContainer>
        <BackgroundImage src={imageUrl} alt={imageUrl} />
      </BackgroundImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <DecreaseItem onClick={() => decreaseItem(id)}>&#10094;</DecreaseItem>
        {quantity}
        <IncreaseItem onClick={() => increaseItem(id)}>&#10095;</IncreaseItem>
      </ItemQuantity>
      <ItemPrice>${price}</ItemPrice>
      <ItemTotalPrice>${price * quantity}</ItemTotalPrice>
      <RemoveItem onClick={() => removeItem(id)}>&#10008;</RemoveItem>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increaseItem: (id) => dispatch(increaseItem(id)),
  decreaseItem: (id) => dispatch(decreaseItem(id)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
