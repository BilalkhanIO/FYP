
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import './Navbar.css';

function Navbar() {
    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/' href="#Home">LOGO</Link>
            </div>

            <nav className='navbar'>
                <ul className='navbar__item'>
                    <li><Link to='/' className='navbar__item_link' href="#home">Home</Link></li>
<<<<<<< HEAD
                    <li><Link to='/about' className='navbar__item_link' href="#about">About</Link></li>
                    <li><a className='navbar__item_link' href="#menu">Menu</a></li>
                    <li><a className='navbar__item_link' href="#Contact-us">Contact Us</a></li>
=======
                    <li><Link to='' className='navbar__item_link' href="#menu">Menu</Link></li>
                    <li><Link to='/about' className='navbar__item_link' href="#about">About</Link></li>
                    <li><Link to='/footer' className='navbar__item_link' href="#Contact-us">Contact Us</Link></li>
>>>>>>> 3b80b963c27854608eb7044a6dd1413cb95b42d7
                </ul>


                <div className='navbar__btn'>
                    <a href='#addToCart' className='navbar__cart'>
                        < FiShoppingBag className="navbar__cart-icon" />
                        <span className='navbar__cart_span'>3</span>
                    </a>
                    <Link to='/login' className="navbar__login">Login/Register</Link>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
