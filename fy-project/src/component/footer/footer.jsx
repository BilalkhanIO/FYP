import React from 'react';
import './footer.css';
 function Footer() {
  return (
    <footer>
        <div className="footer">
            <div>
                <h3 className='footer__h3'>Learn more</h3>
                <ul className="unorder__list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/">Learn more</a></li>

                </ul>
            </div>
             <div>
                <h3 className='footer__h3'>Contact US</h3>
                <ul className="unorder__list">
                 <li><a href="#">03000023000</a> </li>
                <li><a href="#">03000023000</a></li>
             </ul>
            </div>
            <div>
            <h3 className='footer__h3'>Social</h3>
                   <ul className="unorder__list">
                   <li><a href="#">facebook</a></li>
                   <li><a href="#">instagram</a></li>
                   <li><a href="#">twitter</a></li>
                </ul>
            </div>
            
             
        </div>
    </footer>
  );
}
export default Footer;