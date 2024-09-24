import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log("params:", params);
  return (
    <>
      <div>inside Product Details {params.id}</div>
    </>
  );
};

export default ProductDetails;
