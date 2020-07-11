import React from "react";
import { connect } from "react-redux";
import { selectOrderedList } from "../../redux/ordered/ordered.selector";
import { createStructuredSelector } from "reselect";
import {
  OrderedListOverviewContainer,
  Title,
  OrderedEmpty,
} from "./ordered-list-overview.styles";
import OrderedListPreview from "../ordered-list-preview/ordered-list-preview.component";
const OrderedListOverview = ({ orderedList }) => {
  console.log(orderedList);
  return (
    <OrderedListOverviewContainer>
      <Title>History of Orders</Title>
      {orderedList.length ? (
        orderedList.map((orderedItem) => (
          <OrderedListPreview key={orderedItem.id} {...orderedItem} />
        ))
      ) : (
        <OrderedEmpty>No History of Orders</OrderedEmpty>
      )}
    </OrderedListOverviewContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  orderedList: selectOrderedList,
});
export default connect(mapStateToProps)(OrderedListOverview);
