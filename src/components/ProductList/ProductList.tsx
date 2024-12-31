import React from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
