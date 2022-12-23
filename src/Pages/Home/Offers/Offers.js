import React from 'react';
import { Link } from 'react-router-dom';
import offerImg1 from '../../../Media/img/offer/offer.png';
import offerImg2 from '../../../Media/img/offer/offer1.png';

const Offers = () => {
    return (
        <div className=' d-flex align-items-center py-4 my-5 bg-light shadow  text-warning '>
            <div>
                <img src={offerImg2} alt="" />
                <img src={offerImg1} alt="" />

            </div>
            <div>
               <h2 className='bold'> Get It Now !!! <Link to='/allServices'>&#8827;</Link></h2>
            </div>
        </div>
    );
};

export default Offers;