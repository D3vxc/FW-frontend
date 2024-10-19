// src/components/MenWomenSection.js
import React from "react";
import image from "../assets/Homepage/thought-catalog-23KdVfc395A-unsplash.jpg";
import "./MenWomenSection.css";

const MenWomenSection = () => {
  return (
    <div className="men-women-section">
      <div className="category men">
        <img src={image} alt="Men" className="half-width-image" />
        <div className="category-text">
          <h3>Men</h3>
          <p>Shop the latest in Men's fashion</p>
        </div>
      </div>
      <div className="category women">
        <img src={image} alt="Women" className="half-width-image" />
        <div className="category-text">
          <h3>Women</h3>
          <p>Discover our Women's collection</p>
        </div>
      </div>
    </div>
  );
};

export default MenWomenSection;
