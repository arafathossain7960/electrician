import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AlReview from '../../../../Reviews/AddReviews/AlReview';

const AllReviews = () => {
    const [allReviews , setAllReviews]=useState([]);
    useEffect(()=>{
        fetch('https://fast-electro-server-side.vercel.app/allReviews')
        .then(res => res.json())
        .then(data => setAllReviews(data))
    },[])
    return (
        <div className='  text-dark my-5'>
            <div className='py-2 text-center text-primary'>
                <h3 className=''>See the reviews</h3>
            </div>
            
          <Container>
            <Row>
          {
                allReviews.map(allReview => <AlReview 
                    key={allReview._id}
                allReview={allReview}
                ></AlReview>)
            }
            </Row>
         </Container>
            <div className='my-3 py-2 text-center '>
            <Link className='btn btn-primary fs-4' to='/addReviews'>Add your reviews</Link>
            </div>
        </div>
    );
};

export default AllReviews;