import React from 'react';
import "./Header.css";

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <div className="header__logo">
                <StoreIcon className='header__logoImage' fontSize='large' />
                <h2 className='header__logoTitle'>EShop </h2>
            </div>
            <div className="header__search">
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__seachIcon' />
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo">Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <div className="nav__item">
                    <ShoppingBasketIcon className='itemBasket' />
                    <span className="nav__itemLineTwo nav__basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
