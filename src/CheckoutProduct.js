import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    return (

        <div className="checkoutProduct">
            <img src= {image} alt="product1" className='checkoutProduct__image' />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>
                <p className="checkoutProduct__price"><small>$</small><strong>{price}</strong></p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))}
                </div>

                <button>Rmove from Basket</button>
            </div>

        </div>

    )
}

export default CheckoutProduct