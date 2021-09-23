import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setporducts] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setporducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="products-container">
        <h3>Products:{products.length}</h3>
        {products.map((product) => console.log(product))}
      </div>

      <div className="cart-container">
        <h3>Order Summary</h3>
        <h5>Items Ordered:</h5>
      </div>
    </div>
  );
};

export default Shop;
