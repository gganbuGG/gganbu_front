import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div>
      <div>{item?.name}</div>
      <div>{item?.tier}</div>
    </div>
  );
};

export default ProductCard;
