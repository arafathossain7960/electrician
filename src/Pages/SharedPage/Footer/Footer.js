import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='p-5 text-center bg-dark text-light'>
          <div className='d-flex justify-content-around'>
          <div>
            <p>Home</p>
            <p>Blog</p>
            <p>Service</p>
           
           </div>
           <div>
            <p>Happy clients</p>
            <p>Success reviews</p>
            <p>Service area</p>
            
           </div>
           <div>
            <p>Electric certificate</p>
            <p>Iso certificate</p>
            <p>Legal information</p>
           
           </div>
          
          </div>
          <small>All copy &#169; Right 2022 by <b>fastElector</b> </small>
        </div>
    );
};

export default Footer;