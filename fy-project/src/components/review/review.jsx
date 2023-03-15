import React from 'react';
import './Review.css'

function Review() {
    return (
        <section className='review'>

            <h1 className='review__h'>What our clients says about us</h1>
            <ul class="review__list">
                <li class="review__list_item">

                    <div class="review__id">
                        <img className='review__id_img'></img>
                        <h2 class="review__id_name">name</h2>
                    </div>
                    <hr className='review__line' />
                    <div class="review__text">
                        <h4 className='review__text_h'>it was a good experience</h4>
                        <p className='review__text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quia, quo commodi nostrum eum provident, quaerat deserunt in magni tempore consectetur repellat ... </p>
                    </div>
                </li>
                <li class="review__list_item">

                    <div class="review__id">
                        <img className='review__id_img'></img>
                        <h2 class="review__id_name">name</h2>
                    </div>
                    <hr className='review__line' />
                    <div class="review__text">
                        <h4 className='review__text_h'>it was a good experience</h4>
                        <p className='review__text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quia, quo commodi nostrum eum provident, quaerat deserunt in magni tempore consectetur repellat ... </p>
                    </div>
                </li>
                <li class="review__list_item">

                    <div class="review__id">
                        <img className='review__id_img'></img>
                        <h2 class="review__id_name">name</h2>
                    </div>
                    <hr className='review__line' />
                    <div class="review__text">
                        <h4 className='review__text_h'>it was a good experience</h4>
                        <p className='review__text_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quia, quo commodi nostrum eum provident, quaerat deserunt in magni tempore consectetur repellat ... </p>
                    </div>
                </li>
            </ul>
        </section>
    );
}
export default Review;