
import React from 'react';

import './Navbar.css';

const Navbar =()=>(
    <nav className='app__navbar'>
        <div>
            <a href="#Home">LOGO</a>
        </div>
        <ul className='navbar__links'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#Contact-us">Contact Us</a></li>
        </ul>
    </nav>
);

export default Navbar;
