import React from "react";
import { OrderItemContainer, ItemName, ItemPrice } from "./ordered-item.styles";
import { CSSTransition } from "react-transition-group";
import "./ordered-item.css";
const OrderedItem = ({ name, price, quantity, show, timeout }) => {
  console.log(show, timeout);
  return (
    <CSSTransition in={show} timeout={timeout} unmountOnExit classNames="alert">
      <OrderItemContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price * quantity}</ItemPrice>
      </OrderItemContainer>
    </CSSTransition>
  );
};

export default OrderedItem;
