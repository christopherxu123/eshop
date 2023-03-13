import React from 'react';

import "./Product.css";

function Product({id, title, image, price, rating}) {
  return (
    <div>
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                {/* <p>$</p> */}
                <p className="product__price">$<strong>{price}</strong></p>
            </div>
            <div className="product__rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
            </div>
            <img src={image} alt="product1" />
            <button>Add to Basket</button>
        </div>
    </div>
  )
}

export default Product