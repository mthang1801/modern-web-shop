import React, { useState } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import {
  OrderedListPreviewContainer,
  MainContents,
  LeftMainContent,
  RightMainContent,
  MoreOrderedDetails,
  OrderedItemDetails,
} from "./ordered-list-preview.styles";
import OrderedItem from "../ordered-item/ordered-item.component";
const OrderedListPreview = ({ cartItems, user, createdAt, totalPrice }) => {
  console.log(cartItems);
  const [show, setShow] = useState(false);

  return (
    <OrderedListPreviewContainer>
      <MainContents>
        <LeftMainContent>
          {new Date(createdAt.seconds * 1000).toLocaleDateString()}
        </LeftMainContent>
        <RightMainContent>${totalPrice}</RightMainContent>
      </MainContents>
      <MoreOrderedDetails onClick={() => setShow(!show)}>
        Ordered Items Detail{" "}
        <FaLongArrowAltDown style={{ fontWeight: "bold" }} />
      </MoreOrderedDetails>

      <OrderedItemDetails show={show}>
        {cartItems.map((item, id) => (
          <OrderedItem key={item.id} {...item} timeout={250} show={show} />
        ))}
      </OrderedItemDetails>
    </OrderedListPreviewContainer>
  );
};

export default OrderedListPreview;
