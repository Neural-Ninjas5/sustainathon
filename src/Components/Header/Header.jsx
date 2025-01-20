import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/cartContext'; // Make sure this path is correct

function Header() {
    const { cart } = useCart();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navbar">
            <img src="" alt="logo" />
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src="" alt="" />
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={showMenu ? "nav-links active" : "nav-links"}>
                <Link to="/login"><li>Sign-Up</li></Link>
                <li>Return/Order</li>
                <Link to="/marketplace"><li>Marketplace</li></Link>
                <Link to="/cart">
                    <li>Cart</li>
                    <span className='numberCartItems'>{cart.length}</span>
                </Link>
            </ul>
        </div>
    );
}

export default Header;
