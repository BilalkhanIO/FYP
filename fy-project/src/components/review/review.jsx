import React from 'react';
import './review.css'

function Review() {
  return (
    <section className='review'>
    
    <h1 className='review__h'>what our clients says about us</h1>
   <ul class="review__list">
    <li class="review__list_item">
      
        <div class="list__item_name">
            <p>name</p>
            <h4>Alex</h4>
        </div>
        <div class="item__review">
            <h4 className='item__review_h'>it was a good experience</h4>
            <p className='item__review_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quia, quo commodi nostrum eum provident, quaerat deserunt in magni tempore consectetur repellat ... </p>
        </div>
    </li>
    <li class="review__list_item">

        <div class="list__item_name">
            <p>name</p>
            <h4>Abuzar</h4>
        </div>
        <div class="item__review">
            <h4  className='item__review_h'>it was a good experience</h4>
            <p className='item__review_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quia, quo commodi nostrum eum provident, quaerat deserunt in magni tempore consectetur repellat ... </p>
        </div>
    </li>
    <li class="review__list_item">

        <div class="list__item_name">
            <p>name</p>
            <h4>sacatar</h4>
        </div>
        <div class="item__review">
            <h4 className='item__review_h'>it was a good experience</h4>
            <p className='item__review_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis quia, quo commodi nostrum eum provident, quaerat deserunt in magni tempore consectetur repellat ... </p>
        </div>
    </li>
    </ul>
    </section>
  );
}
export default Review;