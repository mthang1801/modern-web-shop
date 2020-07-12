import React from "react";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionContainer,
  CollectionTitle,
  CollectionItems,
} from "./collection.styles";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
const CollectionPage = ({ match, collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItems>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItems>
    </CollectionContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) =>
    selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
