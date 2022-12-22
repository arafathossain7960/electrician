import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AlReview from '../../../../Reviews/AddReviews/AlReview';

const AllReviews = () => {
    const [allReviews , setAllReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allReviews')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    },[])
    return (
        <div className='p-5 text-center bg-info text-dark my-2'>
            
            {
                allReviews.map(allReview => <AlReview 
                    key={allReview._id}
                allReview={allReview}
                ></AlReview>)
            }
            <Link to='/addReviews'>Add your reviews</Link>
        </div>
    );
};

export default AllReviews;