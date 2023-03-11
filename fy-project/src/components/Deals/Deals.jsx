import React from 'react';
import './Deals.css';

export default function Specials() {
    return (
        <section className='deal_section'>
            <ul className='deals'>
                <li className="deal">
                    <div className='deal__image'>

                    </div>
                    <div className='deal__text'>
                        <h3 className='deal__header'>Chicken Biryani</h3>
                        <p className='deal__off'>50% OFF</p>
                        <p className='deal__desc'>So why wait? Come on down and treat yourself to some amazing biryani today! Don't miss out on this incredible deal.</p>
                        <div className='deal__btn-price'>
                            <p className='deal__price'>PKR <span>200</span></p>
                            <button className='deal__btn'>GET DEAL</button>
                        </div>
                    </div>

                </li>
            </ul>
        </section>
    )
}
