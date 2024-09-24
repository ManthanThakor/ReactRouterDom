import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Link to="123">Product -123</Link>
        <Link to="434">Product -434</Link>
        <Link to="12343">Product -12343</Link>
        <Link to="123423">Product -123423</Link>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
