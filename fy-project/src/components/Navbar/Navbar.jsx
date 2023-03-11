
import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import './Navbar.css';

function Navbar() {
    return (
        <div className='header'>
            <div className='logo'>
                <a href="#Home">LOGO</a>
            </div>

            <nav className='navbar'>
                <ul className='navbar__item'>
                    <li><Link to='/' className='navbar__item_link' href="#home">Home</Link></li>
                    <li><link to='../about' className='navbar__item_link' href="#about">About</link></li>
                    <li><a className='navbar__item_link' href="#menu">Menu</a></li>
                    <li><a className='navbar__item_link' href="#Contact-us">Contact Us</a></li>
                </ul>


                {/* <div className='navbar__btn'>
                    <a href='#addToCart' className='navbar__cart'>
                        < FiShoppingBag className="navbar__cart-icon" />
                        <span>3</span>
                    </a>
                    <Link to='/login' className="navbar__login">Login/Register</Link>
                </div> */}

                <div className='navbar__btn'>
                    <a href="#addToCart" className='navbar__cart'><FiShoppingBag className='navbar__cart-icon'/>
                    <span>3</span>
                    </a>

                     <Link to='/login' className="navbar__login">Login/Register</Link>   
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
