import React from 'react';
import "./Checkout.css";

import Subtotal from './Subtotal';

import CheckoutProduct from './CheckoutProduct';

import { useStateValue } from './StateProvider';

function Checkout() {

    const [{basket}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="https://images.pexels.com/photos/4727921/pexels-photo-4727921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="checkout__ad" />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item => (
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />
                ) )}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout