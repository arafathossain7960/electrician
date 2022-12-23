import React from 'react';
import locationImg  from '../../../Media/img/getinTouch/location.png';

const Getintouch = () => {
    return (
        <div className=' my-4 shadow justify-content-around d-flex'>
            <div >
            <p><span></span> <b>Phone</b> : 01245555012</p>
            <p><span></span><b>Email</b> : fastelectro@gmail.com</p>
            <p><span></span> <b>Address </b> : #24/C, #41 GLRoad, Seeul</p>
            <p><span></span> <b>Web</b> : www.fastelectro.com </p>
            
            </div>
            <div>
                <h3>Get in touch</h3>
                <img style={{height:'100px'}} src={locationImg} alt="" />
            </div>
            
        </div>
    );
};

export default Getintouch;