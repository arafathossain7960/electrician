import React from 'react';
import { Link } from 'react-router-dom';

const AllReviews = () => {
    return (
        <div className='p-5 text-center bg-info text-dark my-2'>
            We will add review here

            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to='/addReviews'>Add your reviews</Link>
        </div>
    );
};

export default AllReviews;