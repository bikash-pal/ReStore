import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // function addProducts() {
  //   setProducts((previousState) => [
  //     ...previousState,
  //     {
  //       name: "Product" + (previousState.length + 1),
  //       price: 100.0 * (previousState.length + 1),
  //     },
  //   ]);
  // }

  useEffect(() => {
    fetch("https://localhost:7036/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Typography variant="h1">ReStore</Typography>
      <Catalog products={products} />

      {/* 
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul> */}
      {/* <button onClick={addProducts}>AddProduct</button> */}
    </>
  );
}

export default App;
