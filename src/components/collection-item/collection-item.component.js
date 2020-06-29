import React from "react";

const CollectionItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className="collection-item">
      <div className="background-image"></div>
      <div className="content">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
