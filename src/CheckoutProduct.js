import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct() {
    return (

        <div className="checkoutProduct">
            <img src="https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_1280.jpg" alt="product1" className='checkoutProduct__image' />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    Strawberry
                </p>
                <p className="checkoutProduct__price"><small>$</small><strong>5</strong></p>

                <div className="checkoutProduct__rating">
                    {/* {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐️</p>
                        ))} */}
                </div>

                <button>Rmove from Basket</button>
            </div>

        </div>

    )
}

export default CheckoutProduct