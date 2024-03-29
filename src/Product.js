import React from 'react';

import "./Product.css";

import {useStateValue } from "./StateProvider"

function Product({id, title, image, price, rating}) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
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
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
  )
}

export default Product