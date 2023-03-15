import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiTwitter, FiInstagram, FiFacebook, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import './Footer.css';
function Footer() {
    return (

        <footer className="footer">
            <ul className='footer__item'>
            <li className='footer__list_item'>
                <h3 className='footer__h'>Learn more</h3>
                <ul className="footer__sub_list">
                    <li className='sub__list_item'><a className='sub__list_link' href="/">Home</a></li>
                    <li className='sub__list_item'><Link to=""className='sub__list_link'>Menu</Link></li>
                    <li className='sub__list_item'><Link to="/About" className='sub__list_link'href="/">About</Link></li>

                </ul>
            </li>
            <li className='footer__list_item'>
                <h3 className='footer__h'>Contact us</h3>
                <ul className="footer__sub_list">
                <li className='sub__list_item'><a className='sub__list_link'href="#"><FiMail className='footer__icon'/> E-mail</a></li>
                    <li className='sub__list_item'><a className='sub__list_link'href="#"><FiPhone className='footer__icon'/> 03000023000</a> </li>
                    <li className='sub__list_item'><a className='sub__list_link'href="#"><FaWhatsapp className='footer__icon'/> 03000023000</a></li>
                </ul>
            </li>
            <li className='footer__list_item'>
                <h3 className='footer__h'>Social</h3>
                <ul className="footer__sub_list">
                    <li className='sub__list_item'><a className='sub__list_link'href="#"><FiFacebook className='footer__icon'/> facebook</a></li>
                    <li className='sub__list_item'><a className='sub__list_link'href="#"><FiInstagram className='footer__icon'/> instagram</a></li>
                    <li className='sub__list_item'><a className='sub__list_link'href="#"><FiTwitter className='footer__icon'/> twitter</a></li>
                </ul>
            </li>
            </ul>
            <hr className='footer__line'/>
            <p className='footer__copyright'>Copyright | 2023</p>
        </footer>

    );
}
export default Footer;