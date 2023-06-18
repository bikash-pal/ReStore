import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const products = [
  { name: "Product1", Price: 100.0 },
  { name: "Product2", Price: 200.0 },
];
function App() {
  const [products, setProducts] = useState([
    { name: "Product1", price: 100.0 },
    { name: "Product2", price: 200.0 },
  ]);

  function addProducts() {
    setProducts((previousState) => [
      ...previousState,
      {
        name: "Product" + (previousState.length + 1),
        price: 100.0 * (previousState.length + 1),
      },
    ]);
  }

  useEffect(() => {
    fetch("https://localhost:7036/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>ReStore</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            {item.name}-{item.price}
          </li>
        ))}
      </ul>
      <button onClick={addProducts}>AddProduct</button>
    </div>
  );
}

export default App;
