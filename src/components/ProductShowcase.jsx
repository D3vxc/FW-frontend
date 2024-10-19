import React from "react";
import "./ProductShowcase.css";

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <h2>Our Products</h2>
      <div className="product-grid">
        {/* Add product cards here */}
        <div className="product-card">
          <img src="path_to_image" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Best for your style</p>
        </div>
        <div className="product-card">
          <img src="path_to_image" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Comfortable and stylish</p>
        </div>
        {/* Add more products */}
      </div>
    </div>
  );
};

export default ProductShowcase;
