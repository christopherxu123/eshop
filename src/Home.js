import React from 'react'
import "./Home.css";

import Product from './Product';


function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src="https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80" alt="" className="home__image" />
                <div className="home__row">
                    <Product 
                        id = "123"
                        title = "strawberry" 
                        price = {11.96}
                        rating = {5}
                        image = "https://cdn.pixabay.com/photo/2018/04/29/11/54/strawberries-3359755_1280.jpg"
                    />
                    <Product 
                    id = "1234"
                    title = "apple" 
                    price = {15}
                    rating = {5}
                    image = "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_1280.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                    id = "12345"
                    title = "cake" 
                    price = {18}
                    rating = {5} 
                    image = "https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg"
                    />
                    <Product 
                    id = "123456"
                    title = "candy" 
                    price = {6}
                    rating = {5}
                    image = "https://cdn.pixabay.com/photo/2014/12/10/01/42/chocolate-562559_1280.jpg"
                    />
                    <Product 
                    id = "1234567"
                    title = "bread"
                    price = {8}
                    rating = {9}
                    image = "https://cdn.pixabay.com/photo/2016/03/27/21/59/bread-1284438_1280.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id = "8888"
                    title = "steak"
                    price = {21}
                    rating = {3}
                    image = "https://cdn.pixabay.com/photo/2017/11/10/15/04/steak-2936531_1280.jpg"
                    />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home