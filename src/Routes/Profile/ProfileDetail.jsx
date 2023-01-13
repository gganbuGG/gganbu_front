import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="container">
      <div>소환사명 : {item?.name}</div>
      {/* <div>티어 : {item?.tier}</div>
      <div>LP : {item?.LP}</div>
      <div>승률 : {item?.rate}</div>
      <div>승 : {item?.win}</div>
      <div>패 : {item?.lose}</div> */}
    </div>
  );
};

export default ProductCard;
