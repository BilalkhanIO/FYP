import React from 'react';
import Navbar from '../Navbar/Navbar';
import Deals from '../Deals/Deals';
import Team from '../team/team';
import About from '../about/about';
import Review from '../review/review';
import Footer from '../footer/footer';

import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    
   
    <div className='home'>
      <div className='hero__background_img'>
        <Navbar />
        <div className='hero__text_section'>
          <h1 className='hero__text_h'>Enjoy Restaurant-Quality Food at Home!</h1>
          <p className='hero__text_p'>We believe that good food should be accessible to everyone, which is why we're committed to delivering high-quality, delicious meals right to your doorstep. Try us out and taste the difference today.</p>
          <Link to="" className='hero__text_btn'>ORDER NOW</Link>
        </div>  
      </div>
      <Deals/>
      <Team/>
      <About/>
      <Review/>
      <Footer/>
    </div>
  
    
  )
}